import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeerService {

  sies!: any[];

  content!: any[];
  constructor(private http: HttpClient) { }

  leer(urlapi: string, nombre: string) {
    return this.http.get(`${urlapi}${nombre}`);

  }

  leerTodos(urlapi: string) {
    return this.http.get(urlapi);
  }

  codigoRespuesta(urlapi: string) {
    return this.http.get(`${urlapi}`, { observe: 'response' });

  }

  codigoRespuesta2(urlapi: string, nombre: string) {
    return this.http.get(`${urlapi}${nombre}`, { observe: 'response' });

  }
}
