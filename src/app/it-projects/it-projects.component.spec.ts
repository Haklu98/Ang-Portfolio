import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItProjectsComponent } from './it-projects.component';

describe('ItProjectsComponent', () => {
  let component: ItProjectsComponent;
  let fixture: ComponentFixture<ItProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
