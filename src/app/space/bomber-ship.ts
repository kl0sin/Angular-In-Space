import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class BomberShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Bomber', '/assets/pictures/ships/bomber.png', pilot);
    this.shipHealth = 100;
    this.shipWeaponActive = false;
    this.shipShieldActive = true;
  }
}
