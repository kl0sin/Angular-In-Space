import { SpaceShip } from './space-ship';

export class Scout2Ship extends SpaceShip {
  constructor() {
    super('Scout 2', '/assets/pictures/ships/scout-2.png');
    this.shipHealth = 50;
    this.shipWeaponActive = false;
    this.shipShieldActive = false;
  }
}
