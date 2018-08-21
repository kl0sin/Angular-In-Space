import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.scss']
})
export class SpaceShipComponent implements OnInit {
  shipName = 'Ship Name';
  shipImage = '/assets/pictures/ships/fighter.png';
  shipHealth = 70;
  shipShieldActive = true;
  shipWeaponActive = true;
  shipWeaponImage = '/assets/pictures/ships/weapon.png';
  shipShieldImage = '/assets/pictures/ships/shield.png';
  constructor() { }

  ngOnInit() {
  }

}
