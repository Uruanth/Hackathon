import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


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
  opcionSelect2: string = '0';
  resultados = Array();
  res: any;
  content: any;
  urlapi: string = "http://localhost:8080/api/proveedor/";
  urlapi2: string = "http://localhost:8080/api/proveedores";
  codigoRespuesta!:number;
  res2:any;
  nombre!: string;
  nombre2!: string;
  horario!: string;
  desde!: string;
  hasta!: string;
  direccion!:string;
  correcto!: number;
  codigo!: string;
  item!: string;  

  constructor(private toastr: ToastrService, private objetoHttp: HttpClient) {}

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
      this.mostrar = 1;
      
    } else if (this.opcionSelect2 =="2") {
      this.mostrar = 1;
    }     
    console.log(this.opcionSelect2);
  }

  buscar(){
    this.res2 = this.objetoHttp.get(`${this.urlapi2}${this.nombre}`);
    //subscribe el  archivo Json y lo convierte
    this.res.subscribe((datos: any[]) => {
      this.content = datos;
      this.correcto = 2;
      this.nombre2 = this.content.nombre;
      console.log(this.content);
    });

  }

  /*UPADATE*/

  updateDato() {
    this.res = this.objetoHttp.put(`${this.urlapi}${this.item}`,
    {"abiertoDesde": this.desde,
    "abiertoHasta": this.hasta,
    "codigo": this.codigo,
    "disponibilidadEnvio": this.direccion,
    "nombre": this.nombre,
    "ubicacion": this.direccion});
    this.res.subscribe((datos: any[]) => {
      this.content = datos;
      console.log(this.content);
      this.comparar();
    });
    console.log("ok")
  }
  
  comparar() {
    if (this.codigoRespuesta === 200) {
      this.correcto = 1;
      this.showNotification('top', 'right',1);
      
    }else {
      this.correcto = 0;
      console.log(this.codigoRespuesta)
      this.showNotification('top', 'right',2);
      
    }
  }
  
  showNotification(from:string, align:string, type:number) {
    switch (type) {
      case 1:
        this.toastr.success('<span><i class="fas fa-check"></i> </span><b>Proveedor actualizado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
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