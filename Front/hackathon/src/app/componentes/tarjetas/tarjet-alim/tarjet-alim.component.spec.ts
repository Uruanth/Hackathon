import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetAlimComponent } from './tarjet-alim.component';

describe('TarjetAlimComponent', () => {
  let component: TarjetAlimComponent;
  let fixture: ComponentFixture<TarjetAlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetAlimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetAlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
