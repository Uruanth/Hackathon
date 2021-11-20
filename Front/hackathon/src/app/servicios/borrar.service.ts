import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrarService {

  constructor(private http: HttpClient) { }

borrar(urlapi:string, codigo:string){
  let content!: any[];
  let res:any;

  res = this.http.delete(`${urlapi}${codigo}`);
  res.subscribe((datos: any[]) => {
    content = datos;
    console.log(content);
  });
  console.log("ok")
  return content;
}

}
