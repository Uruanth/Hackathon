import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActualizarService {

  constructor(private http: HttpClient) { }

  actualizar(urlapi: string, codigo: string, body: any): any {
    let content!: any[];
    let res:any;

    res = this.http.put(`${urlapi}${codigo}`,
    body);
    res.subscribe((datos: any[]) => {
      content = datos;
      console.log(content);
    });
    console.log("ok")
    return content;
    
    
  }

}
