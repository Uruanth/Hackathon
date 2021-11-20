import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDonacionComponent } from './info-donacion.component';

describe('InfoDonacionComponent', () => {
  let component: InfoDonacionComponent;
  let fixture: ComponentFixture<InfoDonacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDonacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
