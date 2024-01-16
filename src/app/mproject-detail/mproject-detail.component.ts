import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MusicPortfolioComponent } from '../music-portfolio/music-portfolio.component';
import { Musicprojects } from '../musicprojects';

@Component({
  selector: 'app-mproject-detail',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, FormsModule, MusicPortfolioComponent],
  templateUrl: './mproject-detail.component.html',
  styleUrl: './mproject-detail.component.css',
})
export class MprojectDetailComponent {
  @Input() projects?: Musicprojects;
}
