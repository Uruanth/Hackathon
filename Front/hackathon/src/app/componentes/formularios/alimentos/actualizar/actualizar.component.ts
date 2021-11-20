import { Component, OnInit } from '@angular/core';
import { ActualizarService } from 'src/app/servicios/actualizar.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  urlapi = "http://localhost:8080/api/alimento/";
  codigo!: string;


  nuevo = {
    codigo: "12",
    fechaVencimiento: "asd",
    nombre: "perri",
    tipo: "strincadenag"
  };

  constructor(private act: ActualizarService) { }

  ngOnInit(): void {
  }


  actualizar(): void {
    this.act.actualizar(this.urlapi, this.codigo, this.nuevo);
  }


}
