import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCuponesComponent } from './info-cupones.component';

describe('InfoCuponesComponent', () => {
  let component: InfoCuponesComponent;
  let fixture: ComponentFixture<InfoCuponesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCuponesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCuponesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
