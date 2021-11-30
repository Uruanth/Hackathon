import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CrearService } from 'src/app/servicios/crear.service';

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
  correcto = -1;
  urlapi = "http://localhost:8080/api/proveedor/";
  envio!: string;
  codigoRespuesta!: number;
  nombre: string = "";
  desde: string = "";
  hasta: string = "";
  mapa: string = "";
  direccion: string = "";

  constructor(private toastr: ToastrService, private router: Router,
    private read: CrearService) { }

  capturar() {

    if (this.opcionSelect == "1") {
      this.mostrar = 1;
      this.envio = "Si";

    } else if (this.opcionSelect == "2") {
      this.mostrar = 2;
      this.envio = "No";
    } else {
      this.mostrar = 0;

    }
    console.log("mostrar " + this.mostrar);
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
    console.log("mostrar2 " + this.mostrar2);
    console.log(this.opcionSelect2);
  }

  crearProv() {
    let body = {
      "abiertoDesde": this.desde,
      "abiertoHasta": this.hasta,
      "codigo": "string",
      "disponibilidadEnvio": this.envio,
      "nombre": this.nombre,
      "ubicacion": this.direccion,
    }
    console.log(body)

    this.read.codigoRespuesta(this.urlapi, body).subscribe(data => {
      this.codigoRespuesta = data.status;
      console.log(data.status)
      this.comparar();
    });
    console.log(this.codigoRespuesta);
  }

  comparar() {
    if (this.codigoRespuesta === 200) {
      this.correcto = 1;
      this.showNotification('top', 'right', 1);
    } else{
      this.showNotification('top', 'right', 2);
    }
    console.log(this.codigoRespuesta)
    console.log(this.correcto)
  }

  showNotification(from: string, align: string, type: number) {
    switch (type) {
      case 1:
        this.toastr.success('<span><i class="fas fa-check"></i></span><b>Proveedor creado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.error('<span><i class="fas fa-times"></i></span><b>Error al crear el proveedor</b>', '', {
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

