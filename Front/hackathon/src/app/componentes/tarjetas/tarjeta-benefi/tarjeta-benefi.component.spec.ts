import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaBenefiComponent } from './tarjeta-benefi.component';

describe('TarjetaBenefiComponent', () => {
  let component: TarjetaBenefiComponent;
  let fixture: ComponentFixture<TarjetaBenefiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaBenefiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaBenefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
