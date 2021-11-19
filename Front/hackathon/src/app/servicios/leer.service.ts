import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeerService {

  content!: any[];
  constructor(private http: HttpClient) { }

  leer(urlapi: string, codigo: string) {
    let content!: any[];
    let res: any;

    res = this.http.get(`${urlapi}${codigo}`);
    res.subscribe((datos: any[]) => {
      content = datos;
      console.log(content);
    });
    console.log("ok")
    return content;
  }

  async leerTodos(urlapi: string): Promise<any[]> {
    let res: any;
    var num!: number;
    res = await this.http.get(`${urlapi}`);
    res.subscribe( (datos: any[]) =>  {
      this.content = datos;
      console.log(this.content);
      console.log(datos.length);
      num = datos.length;
    });
    console.log(num+ " es el numero");
    return res;
  }


}
