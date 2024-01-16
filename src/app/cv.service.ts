import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cv } from './cv';
import { CvData } from './cv-data';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  getCv(): Observable<Cv[]> {
    const cvdetails = of(CvData);
    return cvdetails;
  }
  constructor() {}
}
