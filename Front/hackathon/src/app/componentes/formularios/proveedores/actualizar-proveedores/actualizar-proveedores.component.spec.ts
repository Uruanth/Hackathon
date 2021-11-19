import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarProveedoresComponent } from './actualizar-proveedores.component';

describe('ActualizarProveedoresComponent', () => {
  let component: ActualizarProveedoresComponent;
  let fixture: ComponentFixture<ActualizarProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
