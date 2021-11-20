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

  leerTodos(urlapi: string): any[] {
    let res: any;
    var num!: any;
    res = this.http.get(`${urlapi}`, { observe: 'response' })
      .subscribe((response: any) => {
        num = response.status
        console.log(num);
        console.log(response.body);
        this.sies.push(response.body);
        console.log("subscribe")
      }
      );


    var ff = new Promise<any[]>((resolve, reject) => {

      this.http.get(`${urlapi}`, { observe: 'response' })
        .subscribe((response: any) => {
          num = response.status
          console.log(num);
          console.log(response.body);
          this.sies.push(response.body);
          console.log("subscribe")
        }
        
        );
        
        


    });


    console.log(this.sies + " es el sies");
    console.log(num + " es el numero");
    return this.sies;
  }


}
