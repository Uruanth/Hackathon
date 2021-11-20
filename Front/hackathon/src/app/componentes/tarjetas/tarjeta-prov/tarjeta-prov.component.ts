import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-tarjeta-prov',
  templateUrl: './tarjeta-prov.component.html',
  styleUrls: ['./tarjeta-prov.component.css']
})
export class TarjetaProvComponent {

  //Función constructora
  constructor(private objetohttp: HttpClient) { }

  ///////////////// GET /////////////////////////////

  //variable receptora de documentos
  res: any ;
  //variable contenedora de contenidos
  contenido!: any[];
  //url api get
  urlapiGET: string = "http://localhost:8080/api/productos";

  //FUNCIÓN DE CONTROL DE ERRORES
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Error desconocido!';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = `Error: ${error.error.message}\n ${error.status}`;
    } else {
      // Errores del lado del servidor
      errorMessage = `Codigo de Error: ${error.status} \nMensaje: ${error.message}`;
    }
    //MOSTRANDO UN ERROR EN UNA ALERTA
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }

  ///////////////// METODOS ANGULAR /////////////////////////////

  //FUNCIÓN DE EJECUCIÓN ANTES DE LA CARGA DE LA PAGINA

  leerProveedor(): void {

    //utilizando el servicio en la url
    this.res = this.objetohttp.get(this.urlapiGET).pipe(catchError(this.handleError));

    //suscribe el archivo json y lo convierte   
    this.res.subscribe((datos: any[]) => {
      this.contenido = datos;
      console.log("contenido"+ this.contenido);
    });   
    console.log("contenido"+ this.contenido); 
    };
    
  }
