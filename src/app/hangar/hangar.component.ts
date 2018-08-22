import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../space/space-ship';
import { FighterShip } from '../space/fighter-ship';
import { BomberShip } from '../space/bomber-ship';
import { MoonInvaderShip } from '../space/moon-invader-ship';
import { ScoutShip } from '../space/scout-ship';
import { Scout2Ship } from '../space/scout-2-ship';
import { SpaceShuttleShip } from '../space/space-shuttle-ship';
import { Pilot } from '../space/pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];
  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new FighterShip(new Pilot('Lee Adama')));
    this.spaceShips.push(new BomberShip());
    this.spaceShips.push(new MoonInvaderShip());
    this.spaceShips.push(new ScoutShip());
    this.spaceShips.push(new Scout2Ship());
    this.spaceShips.push(new SpaceShuttleShip());
  }
}
