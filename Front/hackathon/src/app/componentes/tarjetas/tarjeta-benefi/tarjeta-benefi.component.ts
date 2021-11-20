import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-benefi',
  templateUrl: './tarjeta-benefi.component.html',
  styleUrls: ['./tarjeta-benefi.component.css']
})
export class TarjetaBenefiComponent implements OnInit {

  listaTemporal = [
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


  @Input() benefi: any[] = [];

  lista2!: Array<any>;
  constructor(private router: Router) { 

    // console.log(typeof this.listaTemporal)
    var a2: any[] = [];
    let a = this.listaTemporal.map((el) => {
      if (el.nombre.includes("nam")) {
        a2.push(el);
      }
    });
    if(this.benefi.length == 0){
      this.benefi = a2;
    } 
  }
  
  ngOnInit(): void {
    

  }


verInfo(a:any){
  console.log(a.codigo);
  this.router.navigate(['alimentos', a.codigo])
}

}
