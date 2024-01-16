import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDetailsComponent } from './it-details.component';

describe('ItDetailsComponent', () => {
  let component: ItDetailsComponent;
  let fixture: ComponentFixture<ItDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
