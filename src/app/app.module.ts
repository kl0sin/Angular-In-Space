import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './ships/space-ship/space-ship.component';
import { PilotComponent } from './space/pilot/pilot.component';
import { PilotRoomComponent } from './space/pilot-room/pilot-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HangarComponent,
    SpaceShipComponent,
    PilotComponent,
    PilotRoomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
