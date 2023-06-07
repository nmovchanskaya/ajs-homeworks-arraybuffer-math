import Magician from '../magician.js';
import Daemon from '../daemon.js';

// const distance = 2;
/* const mag = new Magician();
console.log(mag.attack);
mag.attack = 20;
console.log(mag.attack);
console.log(mag.stoned);
mag.stoned = 1;
console.log(mag.stoned); */

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
