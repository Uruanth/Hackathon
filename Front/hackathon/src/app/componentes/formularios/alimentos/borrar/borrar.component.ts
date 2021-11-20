import { Component, OnInit } from '@angular/core';
import { BorrarService } from 'src/app/servicios/borrar.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {


  urlapi = "http://localhost:8080/api/alimento/";
  codigo!: string;


  constructor(private brr: BorrarService) { }

  ngOnInit(): void {
  }


  borrar(): void {

    this.brr.borrar(this.urlapi, this.codigo);

  }
}
