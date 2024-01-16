import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Itprojects } from './itproject';
import { ItData } from './itproject-data';

@Injectable({
  providedIn: 'root',
})
export class ItProjectsService {
  //Tehdään funktio, jolla haetaan dataa serviceen.
  getItProjects(): Observable<Itprojects[]> {
    const itprojects = of(ItData);
    return itprojects;
  }

  constructor() {}
}
