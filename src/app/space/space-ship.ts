import { Pilot } from './pilot';

export abstract class SpaceShip {
  shipModel: string;
  shipImage: string;
  shipHealth: number;
  shipShieldActive: boolean;
  shipWeaponActive: boolean;
  shipWeaponImage: string;
  shipShieldImage: string;
  pilot: Pilot;

  constructor(shipModel: string, shipImage: string, pilot: Pilot) {
    this.shipWeaponImage = '/assets/pictures/ships/weapon.png';
    this.shipShieldImage = '/assets/pictures/ships/shield.png';
    this.shipModel = shipModel;
    this.shipImage = shipImage;
    this.pilot = pilot;
  }
}
