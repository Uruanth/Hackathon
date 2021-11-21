import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualizarService {

  constructor(private http: HttpClient) { }

  actualizar(urlapi: string, codigo: string, body: any): any {
   return this.http.put(`${urlapi}${codigo}`,
    body);
  }
  
  codigoRespuesta(urlapi: string, codigo: string, body: any): any {
   return this.http.put(`${urlapi}${codigo}`,
    body, { observe: 'response'});
  }
}
