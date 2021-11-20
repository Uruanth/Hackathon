import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
//import { Observable } from "rxjs/Observable";
import { catchError } from 'rxjs/operators';
//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-borrar-proveedores',
  templateUrl: './borrar-proveedores.component.html',
  styleUrls: ['./borrar-proveedores.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class BorrarProveedoresComponent {

  opcionSelect: string = '0';
  mostrar!: number;
  opcionSelect2: string = '0';
  mostrar2!: number; 
  buscado!:string;

  resultados = Array();
  res: any;
  content: any;
  urlapi: string = "'http://localhost:8080/api/clientes'";
  codigoRespuesta!:number;
  res2:any;
  nombre!: string;
  horario!: string;
  desde!: string;
  hasta!: string;
  envio!:string;
  direccion!:string;
  correcto!: number;
  item: string = "619572281e0b36162e21e910";
  

  constructor(private objetoHttp: HttpClient) {}

  capturar() {

      if (this.opcionSelect == "1"){
        this.mostrar = 1;
        
      } else if (this.opcionSelect =="2") {
        this.mostrar = 2;
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
    } else {
      this.mostrar2 = 0;
    }
    console.log(this.mostrar2);
    console.log(this.opcionSelect2);
  }

  buscar(){

  }

  //FUNCIÓN DE CONTROL DE ERRORES
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage =`Error: ${error.error.message}\n ${error.status}`;
    } else {
      // Errores del lado del servidor
      errorMessage =`Codigo de Error: ${error.status} \n Mensaje: ${error.message}`;
    }
    //MOSTRANDO UN ERROR EN UNA ALERTA
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  /*UPADATE*/

  /*updateDato() {
    this.objetoHttp.put(`${this.urlapi}/clientes/{id}`,id);
    this.res.subscribe((datos: any[]) => {
      this.content = datos;
      console.log(this.content);
    });
  }*/
    
  
  comparar() {
    if (this.codigoRespuesta === 200) {
      this.correcto = 1;
      
    }else {
      this.correcto = 0;
      console.log(this.codigoRespuesta)
      /*this.showNotification('top', 'right',2);*/
      
    }
  }

  /*
  showNotification(from, align,type) {
    switch (type) {
      case 1:
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span><b>Acceso correcto, redirigiendo</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> <b>Nombre de usuario o contraseña incorrecta</b>', '', {
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
  } */
}

