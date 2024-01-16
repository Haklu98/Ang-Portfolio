import { Injectable } from '@angular/core';
import { Musicprojects } from './musicprojects';
import { MusicProjectData } from './musicproject-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicprojectsService {
  //Tehdään funktio, jolla haetaan dataa serviceen.
  getMusicprojects(): Observable<Musicprojects[]> {
    const musicprojects = of(MusicProjectData);
    return musicprojects;
  }
  constructor() {}
}
