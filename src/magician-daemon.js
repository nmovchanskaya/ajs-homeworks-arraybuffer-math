// distance in cells
const distance = 2;

export default class MagicianDaemon {
  constructor() {
    this._attack = 10;
    this._stoned = 0;
  }

  get attack() {
    return this._attack * (100 - distance * 10) / 100;
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this.attack - this._stoned * Math.log2(distance) * 5;
  }

  set stoned(value) {
    this._stoned = value;
  }
}

const mag = new MagicianDaemon();
/*console.log(mag.attack);
mag.attack = 20;
console.log(mag.attack);
console.log(mag.stoned);
mag.stoned = 1;
console.log(mag.stoned);*/
