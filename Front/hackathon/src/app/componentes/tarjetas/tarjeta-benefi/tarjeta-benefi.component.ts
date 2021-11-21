import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-tarjeta-benefi',
  templateUrl: './tarjeta-benefi.component.html',
  styleUrls: ['./tarjeta-benefi.component.css']
})
export class TarjetaBenefiComponent {

  urlapi = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/beneficiarios";

  @Input() benefi: any = [];

  lista2!: any;
  contenido: any = [];

  codigoRespuesta!: number;

  constructor(private read: LeerService, private router: Router) {
      this.read.codigoRespuesta(this.urlapi).subscribe(data => {
        this.codigoRespuesta=data.status;
        if(data.status == 200){
          this.obtenerDatos();
        }

      });
  }

  verInfo(a: any) {
    console.log(a.codigo);
    this.router.navigate(['beneficiarios', a.codigo])
  }

  obtenerDatos(){
    this.read.leerTodos(this.urlapi).subscribe(data => {
      this.benefi = data;
  });
}

}
