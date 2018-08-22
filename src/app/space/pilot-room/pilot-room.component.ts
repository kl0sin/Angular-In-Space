import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.scss']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;
  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Helen Smart'));
    this.pilots.push(new Pilot('Ruth Khan'));
    this.pilots.push(new Pilot('Toby DeVito'));
  }

  select(pilot: Pilot) {
    this.selectedPilot = pilot;
  }

}
