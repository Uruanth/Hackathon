import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-leer-proveedores',
  templateUrl: './leer-proveedores.component.html',
  styleUrls: ['./leer-proveedores.component.css']
})

export class LeerProveedoresComponent {

    //Función constructora
    constructor(private objetohttp: HttpClient) { }

    ///////////////// GET /////////////////////////////
    //opciones y objeto revisor de la tabla
    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject<any>();
  
    //variable receptora de documentos
    res: any;
    //variable contenedora de contenidos
    contenido: any;
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
  
    //aliminando objeto revisor de cambios de la tabla
    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
    }
  
    ///////////////// METODOS ANGULAR /////////////////////////////
  
    //FUNCIÓN DE EJECUCIÓN ANTES DE LA CARGA DE LA PAGINA
  
    ngOnInit(): void {
  
      //utilizando el servicio en la url
      this.res = this.objetohttp.get(this.urlapiGET).pipe(catchError(this.handleError));
  
      //suscribe el archivo json y lo convierte   
      this.res.subscribe((datos: any[]) => {
        this.contenido = datos;
        console.log(this.contenido);
        this.dtTrigger.next(this.dtOptions);
      });
  
      //Opciones especiales de la tabla, localización y caracteristicas
      this.dtOptions = {
        pagingType: 'full_numbers',
        columns: [
          {
            title: 'Codigo del producto',
          },
          {
            title: 'Nombre del producto',
          },
          {
            title: 'Nit del proveedor',
          },
          {
            title: 'Precio compra',
          },
          {
            title: 'Iva de compra',
          },
          {
            title: 'Precio venta',
          }
        ],
        pageLength: 10,
        responsive: true,
        language: {
          processing: "Procesando...",
          search: "Buscar:",
          lengthMenu: "Mostrar _MENU_ elementos",
          info: "Mostrando desde _START_ al _END_ de _TOTAL_ elementos",
          infoEmpty: "Mostrando ningún elemento.",
          infoFiltered: "(filtrado _MAX_ elementos total)",
          infoPostFix: "",
          loadingRecords: "Cargando registros...",
          zeroRecords: "No se encontraron registros",
          emptyTable: "No hay datos disponibles en la tabla",
          paginate: {
            first: "Primero",
            previous: "Anterior",
            next: "Siguiente",
            last: "Último"
          },
          aria: {
            sortAscending: ": Activar para ordenar la tabla en orden ascendente",
            sortDescending: ": Activar para ordenar la tabla en orden descendente"
          }
        }
      };
    }
}
