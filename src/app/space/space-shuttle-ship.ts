import { SpaceShip } from './space-ship';

export class SpaceShuttleShip extends SpaceShip {
  constructor() {
    super('Space Shuttle', '/assets/pictures/ships/space-shuttle.png');
    this.shipHealth = 100;
    this.shipWeaponActive = true;
    this.shipShieldActive = true;
  }
}
