import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  lista = [
    {
      "id": "6197e402e84d335376afa2bb",
      "nombre": "nombre 1",
      "codigo": "tyuut",
      "personasACargo": 4,
      "edades": 8,
      "requisitosNutricionales": "zxczxc",
      "motivoSolicitud": "qweqrwqrwq",
      "usoEstimado": "ñljklkjljk"
    },
    {
      "id": "6198d5be2fcbf37fbc561811",
      "nombre": "nombre 2",
      "codigo": "12",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5c42fcbf37fbc561812",
      "nombre": "nombre 3",
      "codigo": "13",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5c92fcbf37fbc561813",
      "nombre": "nombre 4",
      "codigo": "133",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5cc2fcbf37fbc561814",
      "nombre": "nombre 5",
      "codigo": "3",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5cf2fcbf37fbc561815",
      "nombre": "nambre 6",
      "codigo": "23",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5d12fcbf37fbc561816",
      "nombre": "nambre 7",
      "codigo": "234",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5d42fcbf37fbc561817",
      "nombre": "nambre 8",
      "codigo": "98",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5d72fcbf37fbc561818",
      "nombre": "nambre 9",
      "codigo": "65",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "string"
    },
    {
      "id": "6198d5dd2fcbf37fbc561819",
      "nombre": "nambre 10",
      "codigo": "i5",
      "personasACargo": 0,
      "edades": 0,
      "requisitosNutricionales": "string",
      "motivoSolicitud": "string",
      "usoEstimado": "adas"
    }
  ]

  load: boolean;

  constructor() {
    this.load = true;

   }

  ngOnInit(): void {
  }


  listaResult: any[] = [];
  buscar(bb: string) {
    this.load = false;
    // console.log("buscar " + bb);
    let a = this.lista.filter((el) => {
      if (bb != "") {
        if (el.nombre.includes(bb)) {
          console.log(el);
          return el;
        }
      }
      return "";
    });

    if (a.length == 0) {
      this.listaResult = [];
    } else {
      this.listaResult = a;
    }

    this.load = false;
  }



}
