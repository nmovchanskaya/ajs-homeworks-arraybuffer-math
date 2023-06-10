// distance in cells
const distance = 2;

export default class MagicianDaemon {
  constructor() {
    this._attack = 10;
    this._stoned = 0;
  }

  get attack() {
    return this._attack * ((100 - distance * 10) / 100) - this._stoned * Math.log2(distance) * 5;
  }

  set attack(value) {
    this._attack = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }
}

const mag = new MagicianDaemon();
