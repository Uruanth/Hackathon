import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProvComponent } from './tarjeta-prov.component';

describe('TarjetaProvComponent', () => {
  let component: TarjetaProvComponent;
  let fixture: ComponentFixture<TarjetaProvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaProvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaProvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
