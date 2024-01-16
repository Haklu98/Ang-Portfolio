import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JobHistoryComponent } from '../job-history/job-history.component';
import { Cv } from '../cv';

@Component({
  selector: 'app-cv-details',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule, JobHistoryComponent],
  templateUrl: './cv-details.component.html',
  styleUrl: './cv-details.component.css',
})
export class CvDetailsComponent {
  @Input() cv?: Cv;
}
