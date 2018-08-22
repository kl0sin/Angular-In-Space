export abstract class SpaceShip {
  shipModel: string;
  shipImage: string;
  shipHealth: number;
  shipShieldActive: boolean;
  shipWeaponActive: boolean;
  shipWeaponImage: string;
  shipShieldImage: string;

  constructor(shipModel: string, shipImage: string) {
    this.shipWeaponImage = '/assets/pictures/ships/weapon.png';
    this.shipShieldImage = '/assets/pictures/ships/shield.png';
    this.shipModel = shipModel;
    this.shipImage = shipImage;
  }
}
