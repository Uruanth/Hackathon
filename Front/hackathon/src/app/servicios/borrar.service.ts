import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrarService {

  constructor(private http: HttpClient) { }

  borrar(urlapi: string, codigo: string) {
    return this.http.delete(`${urlapi}${codigo}`);
  }
  
  codigoRespuesta(urlapi: string, codigo: string) {
    return this.http.delete(`${urlapi}${codigo}`, {observe: 'response'});
  }
}
