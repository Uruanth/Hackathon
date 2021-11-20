import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBeneficiariosComponent } from './info-beneficiarios.component';

describe('InfoBeneficiariosComponent', () => {
  let component: InfoBeneficiariosComponent;
  let fixture: ComponentFixture<InfoBeneficiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBeneficiariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBeneficiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
