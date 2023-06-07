import Magician from '../magician.js';
import Daemon from '../daemon.js';

test('test initial attack', () => {
  const mag = new Magician();
  expect(mag.attack).toBe(8);
});

test('test set attack', () => {
  const mag = new Magician();
  mag.attack = 20;
  expect(mag.attack).toBe(16);
});

test('test initial stoned', () => {
  const dm = new Daemon();
  dm.attack = 20;
  expect(dm.stoned).toBe(16);
});

test('test set stoned', () => {
  const dm = new Daemon();
  dm.attack = 20;
  dm.stoned = 1;
  expect(dm.stoned).toBe(11);
});
