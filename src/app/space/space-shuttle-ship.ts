import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class SpaceShuttleShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Space Shuttle', '/assets/pictures/ships/space-shuttle.png', pilot);
    this.shipHealth = 100;
    this.shipWeaponActive = true;
    this.shipShieldActive = true;
  }
}
