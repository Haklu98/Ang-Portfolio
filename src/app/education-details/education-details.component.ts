import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EducationCertificatesComponent } from '../education-certificates/education-certificates.component';
import { Education } from '../education';

@Component({
  selector: 'app-education-details',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf,
    FormsModule,
    EducationCertificatesComponent,
  ],
  templateUrl: './education-details.component.html',
  styleUrl: './education-details.component.css',
})
export class EducationDetailsComponent {
  @Input() Education!: Education;
}
