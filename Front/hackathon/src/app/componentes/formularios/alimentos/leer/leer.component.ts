import { Component, OnInit } from '@angular/core';
import { LeerService } from 'src/app/servicios/leer.service';
import { PruebasService } from 'src/app/servicios/pruebas.service';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit {

  urlapi = "http://localhost:8080/api/alimento";

  codigo!: string;

  listaTemporal = [
    {
      "id": "6197e402e84d335376afa2bb",
      "nombre": "asdasdasd",
      "codigo": "tyuut",
      "personasACargo": 4,
      "edades": 8,
      "requisitosNutricionales": "zxczxc",
      "motivoSolicitud": "qweqrwqrwq",
      "usoEstimado": "ñljklkjljk"
    },
    {
      "id": "6198d5be2fcbf37fbc561811",
      "nombre": "string",
      "codigo": "12",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5c42fcbf37fbc561812",
      "nombre": "string",
      "codigo": "13",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5c92fcbf37fbc561813",
      "nombre": "string",
      "codigo": "133",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5cc2fcbf37fbc561814",
      "nombre": "string",
      "codigo": "3",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5cf2fcbf37fbc561815",
      "nombre": "string",
      "codigo": "23",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5d12fcbf37fbc561816",
      "nombre": "string",
      "codigo": "234",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5d42fcbf37fbc561817",
      "nombre": "string",
      "codigo": "98",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5d72fcbf37fbc561818",
      "nombre": "string",
      "codigo": "65",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5dd2fcbf37fbc561819",
      "nombre": "string",
      "codigo": "i5",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "adas"
    }
  ]

  constructor(private re: LeerService, private pruebas: PruebasService) { }

  ngOnInit(): void {

    //    this.leerTodos();
    this.probando();
    //console.log(this.listaTemporal);
    console.log("this.resultados");
    console.log(this.resultados);
    

  }

  async leerTodos() {
    let cont = await this.re.leerTodos((this.urlapi + "s"));
    let otro!: any[];
    console.log("retorno")
    console.log(cont);

  }

  leerByCode() {
    let cont = this.re.leer(this.urlapi, this.codigo);
    console.log(cont);

  }


  //----
  // resultados!: Array<any>;
  resultados!: any;

  // probando() {
  //   console.log("probando")
  //   this.pruebas.otroMetodo()
  //     .subscribe(data => {
  //       console.log("data");
  //       console.log(typeof data);
  //       console.log(data);
  //       this.resultados.push(data);
  //     }
  //     );
  //   console.log("this.resultados componente");
  //   console.log(typeof this.resultados);
  //   console.log(this.resultados);

  //   // this.resultados.forEach(o => console.log(o));


  //   // for (let a of this.resultados) {
  //   //   console.log("a");
  //   //   console.log(a)
  //   // }

  // };


  async probando() {
    this.pruebas.otroMetodo().subscribe(
      (response: any) => {
        let resaux = [];
        console.log("response");
        console.log(response.body);
        this.resultados = response.body;
      }
    );
    
    console.log("a");
    
  }
  //----

}

