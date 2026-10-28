import React, { useEffect, useRef, useState } from 'react';
import soundOn from '../assets/sound-on-pitikoi.svg';
import soundOff from '../assets/sound-off-pitikoi.svg';

export default function SoundToggle({ muted, onToggle }) {
  const [faded, setFaded] = useState(false);
  const timer = useRef(null);
  useEffect(() => {
    timer.current = setTimeout(() => setFaded(true), 4000);
    return () => clearTimeout(timer.current);
  }, []);

  function toggle() {
    onToggle();
    setFaded(false);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFaded(true), 2500);
  }

  return <button className={`sound-toggle ${faded ? 'is-faded' : ''}`}
    aria-label="Mute sound effects" aria-pressed={muted}
    title={muted ? 'Turn sound on' : 'Turn sound off'} onClick={toggle}>
    <img src={muted ? soundOff : soundOn} alt="" />
  </button>;
}
