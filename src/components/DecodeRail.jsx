import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import octopus from '../assets/octopus.png';
import bubble from '../assets/pitikoi-bubble.svg';
import outline from '../assets/pitikoi-bubble-outline.svg';
import dragSound from '../assets/burbujas-ondrag.mp3';
import selectSound from '../assets/burbuja-select.mp3';

export default function DecodeRail({ question, reply, muted, last, onNext, showHint, onLearnDrag }) {
  const board = useRef(null);
  const handle = useRef(null);
  const particles = useRef(null);
  const cards = useRef([]);
  const home = useRef(null);
  const geometry = useRef({ start: 0, end: 0, zones: [] });
  const gesture = useRef(null);
  const y = useRef(0);
  const selectedIndex = useRef(-1);
  const timers = useRef([]);
  const particleTimer = useRef(null);
  const audio = useRef(null);
  const locked = useRef(false);
  const [result, setResult] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [announcement, setAnnouncement] = useState('');

  function moveTo(position) {
    y.current = position;
    handle.current.style.transform = 'translateY(' + position + 'px)';
  }

  function stopAudio() {
    if (!audio.current) return;
    for (const sound of Object.values(audio.current)) {
      sound.pause();
      sound.currentTime = 0;
    }
  }

  function play(sound) {
    if (muted || !sound) return;
    sound.currentTime = 0;
    sound.play().catch(() => {}); // Audio bloqueado: el ejercicio sigue funcionando.
  }

  function stopHolding() {
    setIsDragging(false);
    clearInterval(particleTimer.current);
    particleTimer.current = null;
    handle.current?.classList.remove('is-dragging');
    stopAudio();
  }

  function cancel() {
    if (!gesture.current) return;
    const pointerId = gesture.current.id;
    gesture.current = null;
    stopHolding();
    if (handle.current?.hasPointerCapture(pointerId)) handle.current.releasePointerCapture(pointerId);
    selectedIndex.current = -1;
    moveTo(geometry.current.start);
  }

  useEffect(() => {
    audio.current = { drag: new Audio(dragSound), select: new Audio(selectSound) };
    audio.current.drag.loop = true;
    audio.current.drag.volume = 0.35;
    audio.current.select.volume = 0.55;
    const onBlur = () => { cancel(); stopAudio(); };
    const onVisibility = () => { if (document.hidden) onBlur(); };
    window.addEventListener('blur', onBlur);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearInterval(particleTimer.current);
      timers.current.forEach(clearTimeout);
      stopAudio();
      window.removeEventListener('blur', onBlur);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  useEffect(() => { if (muted) stopAudio(); }, [muted]);

  useLayoutEffect(() => {
    function measure() {
      cancel();
      const top = board.current.getBoundingClientRect().top;
      const start = home.current.offsetTop + home.current.offsetHeight / 2;
      const zones = cards.current.map(card => {
        const rect = card.getBoundingClientRect();
        return { top: rect.top - top, bottom: rect.bottom - top, center: (rect.top + rect.bottom) / 2 - top };
      });
      geometry.current = { start, end: zones[2].center, zones };
      board.current.style.setProperty('--rail-start', start + 'px');
      board.current.style.setProperty('--rail-length', (zones[2].center - start) + 'px');
      moveTo(selectedIndex.current < 0 ? start : zones[selectedIndex.current].center);
    }
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(board.current);
    return () => observer.disconnect();
  }, []);

  function spawnBubble() {
    if (!particles.current || particles.current.children.length >= 12) return;
    const particle = document.createElement('img');
    particle.src = Math.random() > 0.5 ? bubble : outline;
    particle.alt = '';
    particle.className = 'decode-particle';
    particle.style.top = y.current + 'px';
    particle.style.left = (Math.random() * 54 - 27) + 'px';
    particle.style.width = (8 + Math.random() * 12) + 'px';
    particle.style.setProperty('--drift', (Math.random() * 36 - 18) + 'px');
    particle.addEventListener('animationend', () => particle.remove(), { once: true });
    particles.current.appendChild(particle);
  }

  function press(event) {
    if (locked.current || gesture.current || (event.pointerType === 'mouse' && event.button !== 0)) return;
    event.preventDefault();
    setIsDragging(true);
    handle.current.focus({ preventScroll: true });
    gesture.current = { id: event.pointerId, offset: event.clientY - board.current.getBoundingClientRect().top - y.current };
    handle.current.setPointerCapture(event.pointerId);
    handle.current.classList.add('is-dragging');
    stopAudio();
    play(audio.current?.drag);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      spawnBubble();
      particleTimer.current = setInterval(spawnBubble, 110);
    }
  }

  function drag(event) {
    if (gesture.current?.id !== event.pointerId) return;
    const { start, end, zones } = geometry.current;
    const raw = event.clientY - board.current.getBoundingClientRect().top - gesture.current.offset;
    if (showHint && raw > start + 8) onLearnDrag();
    let position = Math.max(start, Math.min(end, raw));
    // Atracción local, sin retraso ni bloqueo del movimiento.
    const near = zones.find(zone => Math.abs(zone.center - position) < 26);
    if (near) {
      const distance = near.center - position;
      position += distance * 0.3 * (1 - Math.abs(distance) / 26);
    }
    moveTo(position);
  }

  function choose(index) {
    if (locked.current) return;
    stopHolding();
    selectedIndex.current = index;
    moveTo(geometry.current.zones[index].center);
    play(audio.current?.select);
    locked.current = true;
    const correct = question.options[index].isCorrect;
    setResult({ index, correct });
    setAnnouncement(correct ? 'Exactly! Correct answer. Continue with Next.' : 'Not exactly. Try again.');
    if (!correct) {
      timers.current.push(setTimeout(() => {
        selectedIndex.current = -1;
        moveTo(geometry.current.start);
      }, 300));
      timers.current.push(setTimeout(() => {
        setResult(null);
        locked.current = false;
      }, 1100));
    }
  }

  function release(event) {
    if (gesture.current?.id !== event.pointerId) return;
    drag(event);
    // La zona válida se decide con la posición real del gesto, no con la atracción.
    const raw = event.clientY - board.current.getBoundingClientRect().top - gesture.current.offset;
    gesture.current = null;
    stopHolding();
    if (handle.current.hasPointerCapture(event.pointerId)) handle.current.releasePointerCapture(event.pointerId);
    const index = geometry.current.zones.findIndex(zone => raw >= zone.top && raw <= zone.bottom);
    if (index >= 0) choose(index);
    else {
      selectedIndex.current = -1;
      moveTo(geometry.current.start);
    }
  }

  function keyboard(event) {
    if (locked.current || gesture.current) return;
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      let index = selectedIndex.current;
      if (event.key === 'Home') index = 0;
      else if (event.key === 'End') index = 2;
      else index = Math.max(0, Math.min(2, index + (event.key === 'ArrowDown' ? 1 : -1)));
      selectedIndex.current = index;
      moveTo(geometry.current.zones[index].center);
      setAnnouncement('Option ' + (index + 1) + ': ' + question.options[index].text + '. Press Enter to confirm.');
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (selectedIndex.current >= 0) choose(selectedIndex.current);
      else setAnnouncement('Use the arrow keys to choose an option, then Enter to confirm.');
    } else if (event.key === 'Escape') {
      selectedIndex.current = -1;
      moveTo(geometry.current.start);
    }
  }

  return (
    <>
      <div className="decode-board" ref={board}>
        <p className="conversation-bubble decode-reply">{reply}</p>
        <div className="decode-home" ref={home} aria-hidden="true" />
        <div className="decode-question">
          <h1>What did the octo mean?</h1>
          <p id="decode-instructions" className="decode-sr-only">Keyboard: use arrow keys, then Enter to confirm. Escape returns to the start.</p>
        </div>
        {question.options.map((option, index) => (
          <React.Fragment key={option.text}>
            <div ref={element => { cards.current[index] = element; }}
              className={'decode-option ' + (result?.index === index ? result.correct ? 'is-correct' : 'is-wrong' : '')}
              aria-label={'Option ' + (index + 1) + ': ' + option.text}>
              <span>{option.text}</span>
              {result?.index === index && !result.correct && <strong>Not exactly...</strong>}
            </div>
            <div className="decode-marker" aria-hidden="true"><img src={bubble} alt="" /></div>
          </React.Fragment>
        ))}
        <div className="decode-track" aria-hidden="true" />
        <div className="decode-particles" ref={particles} aria-hidden="true" />
        <button ref={handle} className={`decode-octo ${showHint ? 'has-drag-hint' : ''} ${isDragging ? 'is-dragging' : ''}`} aria-label="Octo answer selector"
          aria-describedby="decode-instructions" aria-disabled={locked.current}
          onPointerDown={press} onPointerMove={drag} onPointerUp={release}
          onPointerCancel={cancel} onLostPointerCapture={cancel} onKeyDown={keyboard}>
          <img src={octopus} alt="" draggable="false" />
        </button>
      </div>
      <p className="decode-sr-only" role="status" aria-live="polite">{announcement}</p>
      {result?.correct && <button className="primary-button decode-next" onClick={onNext}>{last ? 'Finish' : 'Next'}</button>}
    </>
  );
}
