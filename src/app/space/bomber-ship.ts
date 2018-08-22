import { SpaceShip } from './space-ship';

export class BomberShip extends SpaceShip {
  constructor() {
    super('Bomber', '/assets/pictures/ships/bomber.png');
    this.shipHealth = 100;
    this.shipWeaponActive = false;
    this.shipShieldActive = true;
  }
}
