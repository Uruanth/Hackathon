import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAlimentoComponent } from './info-alimento.component';

describe('InfoAlimentoComponent', () => {
  let component: InfoAlimentoComponent;
  let fixture: ComponentFixture<InfoAlimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAlimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAlimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
