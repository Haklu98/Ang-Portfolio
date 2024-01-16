import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Itprojects } from '../itproject';
import { ItDetailsComponent } from '../it-details/it-details.component';
import { ItProjectsService } from '../it-projects.service';

@Component({
  selector: 'app-it-projects',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule, ItDetailsComponent, NgIf],
  templateUrl: './it-projects.component.html',
  styleUrl: './it-projects.component.css',
})
export class ItProjectsComponent implements OnInit {
  //Tässä käytännössä toistetaan täysin samat asiat
  //mitä aikaisemmissa komponenteissa
  selectedItproject: Itprojects | undefined;
  selectedItprojectId: number | null = null;
  itprojs: Itprojects[] = [];

  onSelect(itprojectId: number): void {
    this.selectedItproject = this.itprojs.find(
      (itproject) => itproject.id === itprojectId
    );
  }

  constructor(private itService: ItProjectsService) {}

  getItProjects(): void {
    this.itService
      .getItProjects()
      .subscribe((itprojs) => (this.itprojs = itprojs));
  }

  toggleItDetail(itproject: Itprojects) {
    if (this.selectedItproject?.id === itproject.id) {
      this.selectedItproject = undefined;
    } else {
      this.selectedItproject = itproject;
    }
  }

  ngOnInit(): void {
    this.getItProjects();
  }
}
