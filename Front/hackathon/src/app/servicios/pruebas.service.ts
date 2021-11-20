import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {



  constructor(private http: HttpClient) {
    console.log("servicio")

  }


  // ---

  // API url
  baseApiUrl = "http://localhost:8080/api/usuarios";
  baseApiUrl2 = "http://54.152.79.84:8080/hackathon-0.0.1-hackathon/api/beneficiarios";

  //variable auxiliar que almacena resultados de cada envio
  resultados = Array();
  resultados2 = Array();

  // Retorna un objeto observable
  upload(file: any): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      //leyendo el contenido
      var reader = new FileReader();
      reader.onloadend = (e) => {

        let lines = reader.result as string;

        let separados = lines.split("\n");

        for (let lineaactual of separados) {
          lineaactual.replace(";", ",");
          let columnas = lineaactual.split(",", 4);
          this.http.post(
            this.baseApiUrl,
            {
              email: columnas[3],
              nombre_completo: columnas[2],
              password: columnas[1],
              username: columnas[0]
            },
            { observe: 'response' }).subscribe(
              (response: any) => {
                let resaux = [];
                resaux[0] = response.status;
                this.resultados.push(resaux);
                console.log(response);
              }
            );
        }
        //console.log(this.resultados);
        resolve(this.resultados);
      };
      reader.readAsText(file);
    });
  }






  //----


  // otroMetodo(): Promise<any[]> {
  //   return new Promise((resolve, reject) => {
  //     console.log("entro al metodo");
  //     this.http.get(
  //       this.baseApiUrl2,
  //       { observe: 'response' }).subscribe(
  //         (response: any) => {
  //           let resaux = [];
  //           resaux[0] = response.status;
  //           this.resultados.push(resaux);
  //           console.log("response");
  //           this.resultados2.push(response.body);
  //           // for (let n of response.body) {
  //           //   console.log("responsen");
  //           //   this.resultados2.push(n);

  //           // }
  //           // console.log(response.body);
  //         }
  //       );
  //       resolve(this.resultados2);
        
  //     });
  // }

  
  otroMetodo() {
    return this.http.get(this.baseApiUrl2);
  }

}

