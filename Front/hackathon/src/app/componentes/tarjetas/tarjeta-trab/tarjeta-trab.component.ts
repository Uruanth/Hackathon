import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-tarjeta-trab',
  templateUrl: './tarjeta-trab.component.html',
  styleUrls: ['./tarjeta-trab.component.css']
})
export class TarjetaTrabComponent {

  urlapi = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/trabajos"

  contenido: any = [];

  constructor(private read: LeerService, private router: Router) {
    this.read.leerTodos(this.urlapi).subscribe(data => {
      console.log(data);
      this.contenido = data;
    });


  }

  verInfo(a: any) {
    console.log(a.codigo);
    this.router.navigate(['trabajos', a.categoria])
  }

}
