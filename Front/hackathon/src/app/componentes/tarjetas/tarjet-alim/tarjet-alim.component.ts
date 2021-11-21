import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-tarjet-alim',
  templateUrl: './tarjet-alim.component.html',
  styleUrls: ['./tarjet-alim.component.css']
})
export class TarjetAlimComponent {

  @Input() contenido: any = [];


  urlbase = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/alimentos";


  lista: any = [];


  codigoRespuesta!: number;

  constructor(private read: LeerService, private router: Router) {
    this.read.codigoRespuesta(this.urlbase).subscribe(data => {
      this.codigoRespuesta = data.status;
      if (data.status == 200) {
        this.obtenerDatos();
      }

    });
  }

  verInfo(a: any) {
    this.router.navigate(['alimentos', a.codigo])
  }

  obtenerDatos() {
    this.read.leerTodos(this.urlbase).subscribe(data => {
      console.log("data trabajos");
      console.log(data);
      this.contenido = data;
    });
  }

}
