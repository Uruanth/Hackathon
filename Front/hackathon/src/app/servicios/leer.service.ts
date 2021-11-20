import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeerService {

  sies!: any[];

  content!: any[];
  constructor(private http: HttpClient) { }

  leer(urlapi: string, codigo: string) {
    return this.http.get(`${urlapi}${codigo}`);

  }

  leerTodos(urlapi: string) {
    return this.http.get(urlapi);
  }

  codigoRespuesta(urlapi: string) {
    return this.http.get(urlapi, { observe: 'response' });

  }
}
