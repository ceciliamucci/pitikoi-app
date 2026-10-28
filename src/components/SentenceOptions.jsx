import React, { useEffect, useRef, useState } from 'react';

// Los botones conservan su clic y teclado. El drag solo selecciona, no evalúa.
export default function SentenceOptions({ question, selected, checked, active, dropRef, onSelect, onDragState }) {
  const gesture = useRef(null);
  const ignoreClick = useRef(false);
  const [drag, setDrag] = useState(null);

  function isOverGap(x, y) {
    const rect = dropRef.current?.getBoundingClientRect();
    return !!rect && x >= rect.left - 8 && x <= rect.right + 8 && y >= rect.top - 8 && y <= rect.bottom + 8;
  }

  function clearDrag() {
    const current = gesture.current;
    gesture.current = null;
    if (current?.element.hasPointerCapture(current.id)) current.element.releasePointerCapture(current.id);
    setDrag(null);
    onDragState(null);
  }

  function cancel() {
    if (!gesture.current) return;
    ignoreClick.current = true;
    clearDrag();
  }

  useEffect(() => {
    if (!active) cancel();
    const hide = () => { if (document.hidden) cancel(); };
    window.addEventListener('blur', cancel);
    document.addEventListener('visibilitychange', hide);
    return () => {
      cancel();
      window.removeEventListener('blur', cancel);
      document.removeEventListener('visibilitychange', hide);
    };
  }, [active]);

  function press(event, index) {
    if (checked || !active || !event.isPrimary || gesture.current || (event.pointerType === 'mouse' && event.button !== 0)) return;
    ignoreClick.current = false;
    event.currentTarget.focus({ preventScroll: true });
    const rect = event.currentTarget.getBoundingClientRect();
    gesture.current = {
      id: event.pointerId, element: event.currentTarget, index,
      x: event.clientX, y: event.clientY, offsetX: event.clientX - rect.left,
      offsetY: event.clientY - rect.top, width: rect.width, moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function move(event) {
    const current = gesture.current;
    if (current?.id !== event.pointerId) return;
    if (!current.moved && Math.hypot(event.clientX - current.x, event.clientY - current.y) < 7) return;
    current.moved = true;
    const over = isOverGap(event.clientX, event.clientY);
    onDragState(over ? 'over' : 'dragging');
    setDrag({ index: current.index, left: event.clientX - current.offsetX, top: event.clientY - current.offsetY, width: current.width });
  }

  function release(event) {
    const current = gesture.current;
    if (current?.id !== event.pointerId) return;
    if (current.moved) {
      ignoreClick.current = true;
      if (isOverGap(event.clientX, event.clientY)) onSelect(current.index, true);
    }
    clearDrag();
  }

  return <>
    <div className="expression-options sentence-options" role="group" aria-labelledby="sentence-instruction">
      {question.options.map((option, index) => (
        <button key={option.text} type="button"
          className={`quiz-option ${selected === index ? 'is-selected' : ''} ${checked && index === question.answer ? 'is-correct' : ''} ${checked && selected === index && selected !== question.answer ? 'is-wrong' : ''} ${drag?.index === index ? 'is-drag-source' : ''}`}
          aria-pressed={selected === index} disabled={checked}
          onPointerDown={event => press(event, index)} onPointerMove={move} onPointerUp={release}
          onPointerCancel={cancel} onLostPointerCapture={cancel}
          onKeyDown={event => { if (event.key === 'Escape') cancel(); }}
          onClick={event => { if (event.detail === 0 || !ignoreClick.current) onSelect(index, false); }}>
          {option.text}
        </button>
      ))}
    </div>
    {drag && <div aria-hidden="true" className="sentence-drag-preview" style={{ left: drag.left, top: drag.top, width: drag.width }}>{question.options[drag.index].text}</div>}
  </>;
}
