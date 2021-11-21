import { Component, OnInit } from '@angular/core';
import { LeerService } from 'src/app/servicios/leer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-prov',
  templateUrl: './tarjeta-prov.component.html',
  styleUrls: ['./tarjeta-prov.component.css']
})
export class TarjetaProvComponent {

  //url api get
  urlapi = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/proveedors";

  contenido: any = [];

  codigoRespuesta!: number;

  constructor(private read: LeerService, private router: Router) {
    this.read.codigoRespuesta(this.urlapi).subscribe(data => {
      this.codigoRespuesta = data.status;
      if (data.status == 200) {
        this.obtenerDatos();
      }

    });
  }

  verInfo(a: any) {
    this.router.navigate(['proveedores', a.codigo])
  }

  obtenerDatos() {
    this.read.leerTodos(this.urlapi).subscribe(data => {
      this.contenido = data;
    });
  }

}




// export class TarjetaProvComponent {
//   listaTemporal = [
//     {
//       "id": "6197e402e84d335376afa2bb",
//       "nombre": "nombre 1",
//       "codigo": "tyuut",
//       "personasACargo": 4,
//       "edades": 8,
//       "requisitosNutricionales": "zxczxc",
//       "motivoSolicitud": "qweqrwqrwq",
//       "usoEstimado": "ñljklkjljk"
//     },
//     {
//       "id": "6198d5be2fcbf37fbc561811",
//       "nombre": "nombre 2",
//       "codigo": "12",
//       "personasACargo": 0,
//       "edades": 0,
//       "requisitosNutricionales": "string",
//       "motivoSolicitud": "string",
//       "usoEstimado": "string"
//     },
//     {
//       "id": "6198d5c42fcbf37fbc561812",
//       "nombre": "nombre 3",
//       "codigo": "13",
//       "personasACargo": 0,
//       "edades": 0,
//       "requisitosNutricionales": "string",
//       "motivoSolicitud": "string",
//       "usoEstimado": "string"
//     },
//     {
//       "id": "6198d5c92fcbf37fbc561813",
//       "nombre": "nombre 4",
//       "codigo": "133",
//       "personasACargo": 0,
//       "edades": 0,
//       "requisitosNutricionales": "string",
//       "motivoSolicitud": "string",
//       "usoEstimado": "string"
//     },
//     {
//       "id": "6198d5cc2fcbf37fbc561814",
//       "nombre": "nombre 5",
//       "codigo": "3",
//       "personasACargo": 0,
//       "edades": 0,
//       "requisitosNutricionales": "string",
//       "motivoSolicitud": "string",
//       "usoEstimado": "string"
//     },
//     {
//       "id": "6198d5cf2fcbf37fbc561815",
//       "nombre": "nambre 6",
//       "codigo": "23",
//       "personasACargo": 0,
//       "edades": 0,
//       "requisitosNutricionales": "string",
//       "motivoSolicitud": "string",
//       "usoEstimado": "string"
//     },
//     {
//       "id": "6198d5d12fcbf37fbc561816",
//       "nombre": "nambre 7",
//       "codigo": "234",
//       "personasACargo": 0,
//       "edades": 0,
//       "requisitosNutricionales": "string",
//       "motivoSolicitud": "string",
//       "usoEstimado": "string"
//     },
//     {
//       "id": "6198d5d42fcbf37fbc561817",
//       "nombre": "nambre 8",
//       "codigo": "98",
//       "personasACargo": 0,
//       "edades": 0,
//       "requisitosNutricionales": "string",
//       "motivoSolicitud": "string",
//       "usoEstimado": "string"
//     },
//     {
//       "id": "6198d5d72fcbf37fbc561818",
//       "nombre": "nambre 9",
//       "codigo": "65",
//       "personasACargo": 0,
//       "edades": 0,
//       "requisitosNutricionales": "string",
//       "motivoSolicitud": "string",
//       "usoEstimado": "string"
//     },
//     {
//       "id": "6198d5dd2fcbf37fbc561819",
//       "nombre": "nambre 10",
//       "codigo": "i5",
//       "personasACargo": 0,
//       "edades": 0,
//       "requisitosNutricionales": "string",
//       "motivoSolicitud": "string",
//       "usoEstimado": "adas"
//     }
//   ]
//     //variable receptora de documentos
//     res: any;
//     //variable contenedora de contenidos
//     contenido: any[]=[];
//     //url api get
//     urlapiGET: string = "http://localhost:8080/api/productos";

//   //Función constructora
//   constructor(private objetohttp: HttpClient) {
//     this.leerProveedor();
//     if(this.contenido.length == 0) {
//       this.contenido = this.listaTemporal;
//     }
//     console.log(this.contenido);
//   }

//   ///////////////// GET /////////////////////////////

//   //FUNCIÓN DE CONTROL DE ERRORES
//   handleError(error: HttpErrorResponse) {
//     let errorMessage = 'Error desconocido!';
//     if (error.error instanceof ErrorEvent) {
//       // Errores del lado del cliente
//       errorMessage = `Error: ${error.error.message}\n ${error.status}`;
//     } else {
//       // Errores del lado del servidor
//       errorMessage = `Codigo de Error: ${error.status} \nMensaje: ${error.message}`;
//     }
//     //MOSTRANDO UN ERROR EN UNA ALERTA
//     //window.alert(errorMessage);
//     return throwError(errorMessage);
//   }

//   ///////////////// METODOS ANGULAR /////////////////////////////

//   //FUNCIÓN DE EJECUCIÓN ANTES DE LA CARGA DE LA PAGINA

//   leerProveedor(): void {

//     //utilizando el servicio en la url
//     this.res = this.objetohttp.get(this.urlapiGET).pipe(catchError(this.handleError));

//     //suscribe el archivo json y lo convierte   
//     this.res.subscribe((datos: any[]) => {
//       this.contenido = datos;
//       console.log("contenido" + this.contenido);
//     });
//     console.log("contenido" + this.contenido);
//   };

// }
