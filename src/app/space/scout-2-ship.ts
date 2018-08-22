import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class Scout2Ship extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Scout 2', '/assets/pictures/ships/scout-2.png', pilot);
    this.shipHealth = 50;
    this.shipWeaponActive = false;
    this.shipShieldActive = false;
  }
}
