import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTrabajosComponent } from './info-trabajos.component';

describe('InfoTrabajosComponent', () => {
  let component: InfoTrabajosComponent;
  let fixture: ComponentFixture<InfoTrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTrabajosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoTrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
