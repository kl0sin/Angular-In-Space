import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class MoonInvaderShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Moon Invader', '/assets/pictures/ships/moon-invader.png', pilot);
    this.shipHealth = 40;
    this.shipWeaponActive = false;
    this.shipShieldActive = false;
  }
}
