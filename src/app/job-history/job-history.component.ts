import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cv } from '../cv';
import { CvDetailsComponent } from '../cv-details/cv-details.component';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-job-history',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, CvDetailsComponent, NgIf],
  templateUrl: './job-history.component.html',
  styleUrl: './job-history.component.css',
})
export class JobHistoryComponent implements OnInit {
  //Tehdään selectedCv, jolla haetaan cv:n tiedot.
  selectedCv: Cv | undefined;
  //Selected CvId hakee id:n perusteella projektin, jotta voidaan näyttää juuri
  //kyseisen projektin tiedot laajennettuna.
  selectedCvId: number | null = null;
  cvs: Cv[] = [];

  //Funktio valitsee cv:n kuvauksen id:n perusteella.
  onSelect(cvId: number): void {
    this.selectedCv = this.cvs.find((cv) => cv.id === cvId);
  }

  constructor(private cvService: CvService) {}

  //Funktio, jolla haetaan cv-tiedot tietokannasta.
  getCv(): void {
    this.cvService.getCv().subscribe((cvs) => (this.cvs = cvs));
  }

  toggleCvDetail(cv: Cv) {
    if (this.selectedCv?.id === cv.id) {
      this.selectedCv = undefined;
    } else {
      this.selectedCv = cv;
    }
  }

  ngOnInit(): void {
    this.getCv();
  }
}
