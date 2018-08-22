import { SpaceShip } from './space-ship';

export class MoonInvaderShip extends SpaceShip {
  constructor() {
    super('Moon Invader', '/assets/pictures/ships/moon-invader.png');
    this.shipHealth = 40;
    this.shipWeaponActive = false;
    this.shipShieldActive = false;
  }
}
