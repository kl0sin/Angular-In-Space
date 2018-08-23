import { Component, OnInit, ViewChild } from '@angular/core';
import { SpaceShip } from '../space/space-ship';
import { Pilot } from '../space/pilot';
import { PilotRoomComponent } from '../space/pilot-room/pilot-room.component';
import { SpaceShipService } from '../space/space-ship.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {
  @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
  spaceShips = this.spaceShipService.hangarShips;
  selectedPilot: Pilot = null;

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
  }

  assignPilot(spaceShip: SpaceShip): void {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  deassignPilot(spaceShip: SpaceShip): void {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }
}
