import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { CrearService } from 'src/app/servicios/crear.service';

@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.css']
})
export class BeneficiariosComponent implements OnInit {

codigo!:string;
edades!:number;
motivoSolicitud!:string;
nombre!:string;
personasACargo!:number;
requisitos!:string;
usoEstimado!:string;
urlapi="http://54.152.79.84:8080/hackathon-1.0.0-api/api/beneficiario"

estado = 0;

constructor(private crear: CrearService) { }

ngOnInit(): void {
  
}

crearBene(){
  let body = {
    "codigo": this.codigo,
    "edades": this.edades,
    "motivoSolicitud": this.motivoSolicitud,
    "nombre": this.nombre,
    "personasACargo": this.personasACargo,
    "requisitosNutricionales": this.requisitos,
    "usoEstimado": this.usoEstimado
  }

  this.crear.codigoRespueta(this.urlapi, body).subscribe(data => {
    this.estado = data.status;
  });
  
}

}
