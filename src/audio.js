import click from './assets/sounds/click-opcion.mp3';
import next from './assets/sounds/next.mp3';
import wrong from './assets/sounds/not-exactly.mp3';
import activity from './assets/sounds/select-activity.mp3';
import drop from './assets/sounds/dragndrop.mp3';
import bubbles from './assets/sounds/burbujas-ondrag.mp3';
import correct from './assets/sounds/burbuja-select.mp3';

const sources = { click, next, wrong, activity, drop, bubbles, correct };
const sounds = {};
let activeSound = null;
let muted = readMuted();

export function readMuted() {
  try { return localStorage.getItem('pitikoi-muted') === 'true'; }
  catch { return false; }
}

export function stopSound() {
  if (!activeSound) return;
  activeSound.pause();
  activeSound.currentTime = 0;
  activeSound = null;
}

export function stopBubbles() {
  if (activeSound === sounds.bubbles) stopSound();
}

export function setSoundMuted(value) {
  muted = value;
  if (muted) stopSound();
  try { localStorage.setItem('pitikoi-muted', String(value)); }
  catch { /* La preferencia sigue funcionando en memoria si no hay almacenamiento. */ }
}

// Solo se llama desde acciones del usuario. Una instancia por archivo,
// un sonido activo a la vez y ninguna cola de reproducciones.
export function playSound(name) {
  stopSound();
  if (muted || !sources[name]) return;
  if (!sounds[name]) {
    sounds[name] = new Audio(sources[name]);
    sounds[name].volume = name === 'bubbles' ? 0.3 : 0.5;
    sounds[name].loop = name === 'bubbles';
  }
  activeSound = sounds[name];
  // Safari puede rechazar play(): el ejercicio debe continuar igualmente.
  activeSound.play().catch(() => {});
}
