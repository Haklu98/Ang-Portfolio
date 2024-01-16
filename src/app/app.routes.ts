import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { JobHistoryComponent } from './job-history/job-history.component';
import { MusicPortfolioComponent } from './music-portfolio/music-portfolio.component';
import { EducationCertificatesComponent } from './education-certificates/education-certificates.component';
import { ItProjectsComponent } from './it-projects/it-projects.component';

export const routes: Routes = [
  //Lisätään pathit sivuille, jotka ovat olemassa ja että linkit toimivat.
  { path: '', redirectTo: '/etusivu', pathMatch: 'full' },
  { path: 'etusivu', component: EtusivuComponent },
  { path: 'music-portfolio', component: MusicPortfolioComponent },
  { path: 'job-history', component: JobHistoryComponent },
  { path: 'education-certificates', component: EducationCertificatesComponent },
  { path: 'it-projects', component: ItProjectsComponent },
];
