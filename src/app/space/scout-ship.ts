import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class ScoutShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Scout', '/assets/pictures/ships/scout.png', pilot);
    this.shipHealth = 50;
    this.shipWeaponActive = false;
    this.shipShieldActive = false;
  }
}
