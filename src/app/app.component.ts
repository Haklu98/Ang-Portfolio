import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { JobHistoryComponent } from './job-history/job-history.component';
import { MusicPortfolioComponent } from './music-portfolio/music-portfolio.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    EtusivuComponent,
    JobHistoryComponent,
    MusicPortfolioComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Aleksi Hakala';
}
