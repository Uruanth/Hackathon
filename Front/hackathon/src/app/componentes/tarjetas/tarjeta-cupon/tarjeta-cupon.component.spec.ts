import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCuponComponent } from './tarjeta-cupon.component';

describe('TarjetaCuponComponent', () => {
  let component: TarjetaCuponComponent;
  let fixture: ComponentFixture<TarjetaCuponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCuponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCuponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
