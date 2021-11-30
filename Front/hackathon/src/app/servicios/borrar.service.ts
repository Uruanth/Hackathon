import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrarService {

  constructor(private http: HttpClient) { }

  borrar(urlapi: string, nombre: string) {
    return this.http.delete(`${urlapi}${nombre}`);
  }
  
  codigoRespuesta(urlapi: string, nombre: string) {
    return this.http.delete(`${urlapi}${nombre}`, {observe: 'response'});
  }
}
