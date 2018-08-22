import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.scss']
})
export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter();
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;
  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Helen Smart'));
    this.pilots.push(new Pilot('Ruth Khan'));
    this.pilots.push(new Pilot('Toby DeVito'));
    this.pilots.push(new Pilot('Toby DeVito'));
  }

  select(pilot: Pilot) {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  pilotLeave(): void {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  pilotReturn(pilot: Pilot): void {
    this.pilots.push(pilot);
  }

}
