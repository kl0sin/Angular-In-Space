import { Injectable } from '@angular/core';
import { OrderFormValue } from './order-form-value';
import { Observable, timer } from 'rxjs';
import { SpaceShip } from './space-ship';
import { map, take } from 'rxjs/operators';
import { SpaceShipType } from './space-ship-type.enum';
import { FighterShip } from './fighter-ship';
import { BomberShip } from './bomber-ship';
import { MoonInvaderShip } from './moon-invader-ship';
import { ScoutShip } from './scout-ship';
import { Scout2Ship } from './scout-2-ship';
import { SpaceShuttleShip } from './space-shuttle-ship';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  static shipProductionTime = 500;
  constructor() { }

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const selectedShipClass = Number(formValues.shipType);
    let shipClass;

    switch (selectedShipClass) {
      case SpaceShipType.Fighter:
        shipClass = FighterShip;
        break;
      case SpaceShipType.Bomber:
        shipClass = BomberShip;
        break;
      case SpaceShipType.MoonInvader:
        shipClass = MoonInvaderShip;
        break;
      case SpaceShipType.Scout:
        shipClass = ScoutShip;
        break;
      case SpaceShipType.Scout2:
        shipClass = Scout2Ship;
        break;
      case SpaceShipType.SpaceShuttle:
        shipClass = SpaceShuttleShip;
        break;
      default:
        shipClass = FighterShip;
    }

    return timer(SpaceShipService.shipProductionTime, SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
    );
  }
}
