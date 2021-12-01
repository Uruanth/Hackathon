import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BorrarService } from 'src/app/servicios/borrar.service';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-borrar-proveedores',
  templateUrl: './borrar-proveedores.component.html',
  styleUrls: ['./borrar-proveedores.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class BorrarProveedoresComponent {

  resultados = Array();
  content: any;
  content2: any;
  urlapi: string = "http://localhost:8080/api/proveedor/";
  codigoRespuesta!:number;
  res!:any;
  res2:any;
  nombre!: string;
  nombre2!: string;
  correcto!: number;
  

  constructor(private toastr: ToastrService, private objetoHttp: HttpClient,
    private read: LeerService, private clean: BorrarService) {}

  buscar(){
    this.res2 = this.read.codigoRespuesta2(this.urlapi, this.nombre).subscribe(datos => {
      this.codigoRespuesta = datos.status;
      console.log(this.codigoRespuesta);

      if (this.codigoRespuesta == 200){
        this.buscarNombre();
        this.showNotification('top', 'right',2);

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

  deleteDato() {
    this.res = this.clean.borrar(this.urlapi, this.nombre).subscribe(datos => {
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
        this.toastr.success('<span><i class="fas fa-check"></i></span><b>Puede continuar para borrar todos los datos del proveedor</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
        case 3:
        this.toastr.success('<span><i class="fas fa-check"></i> </span><b>Proveedor borrado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 4:
        this.toastr.error('<span><i class="fas fa-times"></i> </span><b>Error al borrar los datsos del proveedor</b>', '', {
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

