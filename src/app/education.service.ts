import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Education } from './education';
import { EducationData } from './education-data';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  getEducation(): Observable<Education[]> {
    const education = of(EducationData);
    return education;
  }
  constructor() {}
}
