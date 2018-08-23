import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pilot, PilotAttrs } from './pilot';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) { }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<PilotAttrs[]>('/api/pilots')
      .pipe(
        map((pilots) => pilots.map((pilotsAttrs) => new Pilot(pilotsAttrs)))
      );
  }
}
