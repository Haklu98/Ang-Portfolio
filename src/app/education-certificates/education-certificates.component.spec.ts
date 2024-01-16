import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCertificatesComponent } from './education-certificates.component';

describe('EducationCertificatesComponent', () => {
  let component: EducationCertificatesComponent;
  let fixture: ComponentFixture<EducationCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationCertificatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
