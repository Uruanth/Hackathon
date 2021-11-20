import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaTrabComponent } from './tarjeta-trab.component';

describe('TarjetaTrabComponent', () => {
  let component: TarjetaTrabComponent;
  let fixture: ComponentFixture<TarjetaTrabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaTrabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaTrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
