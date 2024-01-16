import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MusicprojectsService } from '../musicprojects.service';
import { Musicprojects } from '../musicprojects';
import { MprojectDetailComponent } from '../mproject-detail/mproject-detail.component';

@Component({
  selector: 'app-music-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, MprojectDetailComponent],
  templateUrl: './music-portfolio.component.html',
  styleUrl: './music-portfolio.component.css',
})
export class MusicPortfolioComponent implements OnInit {
  // Tehdään selected project, jolla voidaan valita projekti.
  selectedProject: Musicprojects | undefined;
  // Selected project id hakee id:n perusteella projektin, jotta button näyttää vain tietyn kuvauksen.
  selectedProjectId: number | null = null;
  projects: Musicprojects[] = [];
  //Funktio valitsee projektin kuvauksen id:n perusteella.
  onSelect(projectId: number): void {
    this.selectedProject = this.projects.find(
      (project) => project.id === projectId
    );
  }

  constructor(private musicprojectsService: MusicprojectsService) {}

  // Tehdään funktio, joka hakee projektitiedot tietokannasta ja jotta ne voidaan injektoida.
  getProjects(): void {
    this.musicprojectsService
      .getMusicprojects()
      .subscribe((projects) => (this.projects = projects));
  }

  //Muuttuja, joka asettaa filtterin näkyvyyden
  showFilters: boolean = false;

  //Tehdään funktio, jolla saa filtterit näkyviin tai piiloon.
  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  hideFilters() {
    this.showFilters = false;
  }

  // Annetaan filtterimuuttujille perusarvot
  filters = {
    Role1: false,
    Role2: false,
    Role3: false,
    Role4: false,
    Role5: false,
    Year1: false,
    Year2: false,
    Year3: false,
    Year4: false,
    Year5: false,
    Year6: false,
    Year7: false,
  };

  get filteredProjects(): Musicprojects[] {
    //Jos mitään filttereitä ei ole valittuna, näytetään kaikki projektit.
    if (
      !this.filters.Role1 &&
      !this.filters.Role2 &&
      !this.filters.Role3 &&
      !this.filters.Role4 &&
      !this.filters.Role5 &&
      !this.filters.Year1 &&
      !this.filters.Year2 &&
      !this.filters.Year3 &&
      !this.filters.Year4 &&
      !this.filters.Year5 &&
      !this.filters.Year6 &&
      !this.filters.Year7
    ) {
      return this.projects;
    }
    //Haetaan projekti ja jos oliossa on kyseinen rooli, palautetaan true.
    return this.projects.filter((project) => {
      if (this.filters.Role1 && project.roles.includes('Tuottaja')) {
        return true;
      }
      if (this.filters.Role2 && project.roles.includes('Säveltäjä')) {
        return true;
      }
      if (this.filters.Role3 && project.roles.includes('Miksaaja')) {
        return true;
      }
      if (this.filters.Role4 && project.roles.includes('Sanoittaja')) {
        return true;
      }
      if (this.filters.Role5 && project.roles.includes('Sovittaja')) {
        return true;
      }
      if (this.filters.Year1 && project.year === 2018) {
        return true;
      }
      if (this.filters.Year2 && project.year === 2019) {
        return true;
      }
      if (this.filters.Year3 && project.year === 2020) {
        return true;
      }
      if (this.filters.Year4 && project.year === 2021) {
        return true;
      }
      if (this.filters.Year5 && project.year === 2022) {
        return true;
      }
      if (this.filters.Year6 && project.year === 2023) {
        return true;
      }
      if (this.filters.Year7 && project.year === 2024) {
        return true;
      }
      return false;
    });
  }

  //Funktio, jolla saadaan esiin lisätiedot/kuvaus projektista.
  toggleProjectDetail(project: Musicprojects) {
    if (this.selectedProject?.id === project.id) {
      this.selectedProject = undefined;
    } else {
      this.selectedProject = project;
    }
  }

  //Sama kuin edellinen, mutta tämä sulkee sitten kyseisen overlay-ikkunan.
  closeProjectDetail() {
    this.selectedProject = undefined;
  }

  ngOnInit(): void {
    this.getProjects();
  }
}
