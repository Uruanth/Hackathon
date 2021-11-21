import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';


@Component({
  selector: 'app-agregar-proveedores',
  templateUrl: './agregar-proveedores.component.html',
  styleUrls: ['./agregar-proveedores.component.css']
})
export class AgregarProveedoresComponent {

  opcionSelect: string = '0';
  mostrar!: number;
  opcionSelect2: string = '0';
  mostrar2!: number;
  codigoRespuesta: number = 201;
  correcto = -1;

  constructor( private toastr: ToastrService, private router: Router) {  }

  capturar() {

    if (this.opcionSelect == "1") {
      this.mostrar = 1;

    } else if (this.opcionSelect == "2") {
      this.mostrar = 2;
    } else {
      this.mostrar = 0;
    }
    console.log("mostar " + this.mostrar);
    console.log(this.opcionSelect);
  }

  capturar2() {

    if (this.opcionSelect2 == "1") {
      this.mostrar2 = 1;

    } else if (this.opcionSelect2 == "2") {
      this.mostrar2 = 2;
    } else {
      this.mostrar2 = 0;
    }
    console.log("mostar2 " + this.mostrar2);
    console.log(this.opcionSelect2);
  }

  comparar() {
    if (this.codigoRespuesta === 200) {
      this.correcto = 0;
      this.showNotification('top', 'right', 2);
      
    } else if(this.codigoRespuesta ===201) {
      this.correcto = 1;
      this.showNotification('top', 'right', 2);
    } else if(this.codigoRespuesta ===404) {
      this.correcto = 2;
      this.showNotification('top', 'right', 2);
    } else if(this.codigoRespuesta ===500) {
      this.correcto = 3;
      this.showNotification('top', 'right', 2);
    }
    console.log(this.codigoRespuesta)
    console.log(this.correcto)
  }

  showNotification(from:string, align:string, type:number) {
    switch (type) {
      case 1:
        this.toastr.success('<span <i class="fas fa-check"></i>></span><b>Proveedor creado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.error('<span class="<i class="fas fa-times"></i>"></span> <b>Error al crear el proveedor</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      default:
        break;
    }
  }
}

