import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pilot } from '../pilot';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.scss']
})
export class PilotRoomComponent implements OnInit {
  @Output() selected = new EventEmitter();
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.pilotService.getPilots()
      .subscribe({
        next: (pilots) => this.pilots = pilots,
        error: () => alert('Nie udało się pobrać listy pilotów.')
      });
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
