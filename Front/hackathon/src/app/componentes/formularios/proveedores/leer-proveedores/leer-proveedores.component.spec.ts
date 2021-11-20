import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerProveedoresComponent } from './leer-proveedores.component';

describe('LeerProveedoresComponent', () => {
  let component: LeerProveedoresComponent;
  let fixture: ComponentFixture<LeerProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeerProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
