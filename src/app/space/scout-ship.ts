import { SpaceShip } from './space-ship';

export class ScoutShip extends SpaceShip {
  constructor() {
    super('Scout', '/assets/pictures/ships/scout.png');
    this.shipHealth = 50;
    this.shipWeaponActive = false;
    this.shipShieldActive = false;
  }
}
