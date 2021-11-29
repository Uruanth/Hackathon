import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ActualizarService } from 'src/app/servicios/actualizar.service';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-actualizar-proveedores',
  templateUrl: './actualizar-proveedores.component.html',
  styleUrls: ['./actualizar-proveedores.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ActualizarProveedoresComponent {

  opcionSelect: string = '0';
  mostrar!: number;
  mostrar2!: number;
  opcionSelect2: string = '0';
  resultados = Array();
  res: any;
  content: any;
  content2: any;
  urlapi: string = "http://localhost:8080/api/proveedor/";
  codigoRespuesta!:number;
  res2:any;
  nombre!: string;
  nombre2!: string;
  horario!: string;
  desde!: string;
  hasta!: string;
  direccion!:string;
  correcto!: number;
  envio!: string;

  constructor(private toastr: ToastrService, private objetoHttp: HttpClient,
    private read: LeerService, private update: ActualizarService) {}

  capturar() {

      if (this.opcionSelect == "1"){
        this.envio = "Si";
        
      } else if (this.opcionSelect =="2") {
        this.envio = "No";
      } else {
        this.mostrar = 0;
      }
      console.log(this.mostrar);
      console.log(this.opcionSelect);
  }

  capturar2() {

    if (this.opcionSelect2 == "1"){
      this.mostrar2 = 1;
      
    } else if (this.opcionSelect2 =="2") {
      this.mostrar2 = 2;
    }     
    console.log(this.opcionSelect2);
  }

  buscar(){
    this.res2 = this.read.codigoRespuesta2(this.urlapi, this.nombre).subscribe(datos => {
      this.codigoRespuesta = datos.status;
      console.log(this.codigoRespuesta);

      if (this.codigoRespuesta == 200){
        this.mostrar = 1;
        this.buscarNombre();

      } else{
        
        this.showNotification('top', 'right',1);
      }      
      console.log(this.correcto);
    });
  }

  buscarNombre(){
    this.res2 = this.read.leer(this.urlapi, this.nombre).subscribe(datos => {
      this.content = datos;
      this.nombre2 = this.content[0].nombre;
      console.log(this.content);
      console.log(this.correcto);
    });
  }

  /*UPADATE*/

  updateDato() {
    let body = {
      "abiertoDesde": this.desde,
      "abiertoHasta": this.hasta,
      "codigo": "string",
      "disponibilidadEnvio": this.envio,
      "nombre": this.nombre,
      "ubicacion": this.direccion,
    }
    console.log(body)
    this.res = this.update.actualizar(this.urlapi, this.nombre, body).subscribe((datos: any[]) => {
      this.content = datos;
      console.log(this.content);
      this.comparar();
    });
    console.log("ok")
  }
  
  comparar() {
    if (this.codigoRespuesta === 200) {
      this.correcto = 1;
      this.showNotification('top', 'right',2);
      
    }else {
      this.correcto = 0;
      console.log(this.codigoRespuesta)
      this.showNotification('top', 'right',3);
      
    }
  }
  
  showNotification(from:string, align:string, type:number) {
    switch (type) {
      case 1:
        this.toastr.error('<span><i class="fas fa-times"></i> </span><b>Proveedor no se encuentra registrado</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
        case 2:
        this.toastr.success('<span><i class="fas fa-check"></i> </span><b>Proveedor actualizado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 3:
        this.toastr.error('<span><i class="fas fa-times"></i> </span><b>Error al actualizar el proveedor</b>', '', {
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