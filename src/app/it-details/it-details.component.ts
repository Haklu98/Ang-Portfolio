import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItProjectsComponent } from '../it-projects/it-projects.component';
import { Itprojects } from '../itproject';

@Component({
  selector: 'app-it-details',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule, ItProjectsComponent],
  templateUrl: './it-details.component.html',
  styleUrl: './it-details.component.css',
})
export class ItDetailsComponent {
  @Input() itprojects?: Itprojects;
}
