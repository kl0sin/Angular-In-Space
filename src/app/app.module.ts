import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './ships/space-ship/space-ship.component';
import { PilotComponent } from './space/pilot/pilot.component';
import { PilotRoomComponent } from './space/pilot-room/pilot-room.component';
import { EngineersRoomComponent } from './space/engineers-room/engineers-room.component';

@NgModule({
  declarations: [
    AppComponent,
    HangarComponent,
    SpaceShipComponent,
    PilotComponent,
    PilotRoomComponent,
    EngineersRoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
