import { SpaceShip } from './space-ship';

export class FighterShip extends SpaceShip {
  constructor() {
    super('Fighter', '/assets/pictures/ships/fighter.png');
    this.shipHealth = 70;
    this.shipWeaponActive = true;
    this.shipShieldActive = false;
  }
}
