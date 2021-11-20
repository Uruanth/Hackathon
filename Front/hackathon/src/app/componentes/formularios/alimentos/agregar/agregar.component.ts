import { Component, OnInit } from '@angular/core';
import { CrearService } from 'src/app/servicios/crear.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  urlapi = "http://localhost:8080/api/alimento";

  nuevo = {
    codigo: "12",
    fechaVencimiento: "asd",
    nombre: "perri",
    tipo: "strincadenag"
  }


  constructor(private crear: CrearService) { }

  ngOnInit(): void {
  }
  
  crearAlimento(){
    let resu: any;
    resu = this.crear.crear(this.urlapi, this.nuevo);
    console.log(resu) 
  }
}
