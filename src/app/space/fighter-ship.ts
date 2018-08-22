import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class FighterShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Fighter', '/assets/pictures/ships/fighter.png', pilot);
    this.shipHealth = 70;
    this.shipWeaponActive = true;
    this.shipShieldActive = false;
  }
}
