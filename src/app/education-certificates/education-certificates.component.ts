import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EducationService } from '../education.service';
import { EducationDetailsComponent } from '../education-details/education-details.component';
import { Education } from '../education';

@Component({
  selector: 'app-education-certificates',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, EducationDetailsComponent, NgIf],
  templateUrl: './education-certificates.component.html',
  styleUrl: './education-certificates.component.css',
})
export class EducationCertificatesComponent implements OnInit {
  //Jälleen kerran käytetään samaa pohjaa, kuin aikaisemmissa komponenteissa.
  selectedEducation: Education | undefined;
  selectedEducationId: number | null = null;
  educations: Education[] = [];

  constructor(private educationService: EducationService) {}

  getEducations(): void {
    this.educationService
      .getEducation()
      .subscribe((educations) => (this.educations = educations));
  }

  toggleEducationDetails(education: Education): void {
    if (this.selectedEducation?.id === education.id) {
      this.selectedEducation = undefined;
    } else {
      this.selectedEducation = education;
    }
  }

  ngOnInit(): void {
    this.getEducations();
  }
}
