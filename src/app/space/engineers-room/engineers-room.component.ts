import { Component, OnInit } from '@angular/core';
import { SpaceShipType } from '../space-ship-type.enum';
import { OrderFormValue } from '../order-form-value';
import { SpaceShipService } from '../space-ship.service';
import { map } from 'rxjs/operators';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: [ './engineers-room.component.scss' ]
})
export class EngineersRoomComponent implements OnInit {
  isProducing = false;
  shipsCount = this.spaceShipService.hangarShips
    .pipe(
      map((ships) => ships.length)
    );
  spaceShipTypes: ShipType[] = [
    { label: 'Fighter', value: SpaceShipType.Fighter },
    { label: 'Bomber', value: SpaceShipType.Bomber },
    { label: 'Moon Invader', value: SpaceShipType.MoonInvader },
    { label: 'Scout', value: SpaceShipType.Scout },
    { label: 'Scout 2', value: SpaceShipType.Scout2 },
    { label: 'Space Shuttle', value: SpaceShipType.SpaceShuttle },
  ];

  constructor(private spaceShipService: SpaceShipService) {
  }

  ngOnInit() {
  }

  orderSpaceShips(formValue: OrderFormValue): void {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValue)
      .subscribe({
        complete: () => this.isProducing = false
      });
  }
}
