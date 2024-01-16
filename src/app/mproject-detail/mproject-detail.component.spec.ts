import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MprojectDetailComponent } from './mproject-detail.component';

describe('MprojectDetailComponent', () => {
  let component: MprojectDetailComponent;
  let fixture: ComponentFixture<MprojectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MprojectDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MprojectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
