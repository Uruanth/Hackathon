import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearService {

  constructor(private http: HttpClient) { }


crear(urlapi: string, body: any): any {
  let content!: any[];
  let res:any;

  res = this.http.post(`${urlapi}`,
  body);
  res.subscribe((datos: any[]) => {
    content = datos;
    console.log(content);
  });
  console.log("ok")
  return content;
}

}
