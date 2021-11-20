import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-tarjeta-cupon',
  templateUrl: './tarjeta-cupon.component.html',
  styleUrls: ['./tarjeta-cupon.component.css']
})
export class TarjetaCuponComponent {

  urlapi = "http://54.152.79.84:8080/hackathon-0.0.1-hackathon/api/cupones"

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
    this.router.navigate(['alimentos', a.categoria])
  }

  obtenerDatos(){
    this.read.leerTodos(this.urlapi).subscribe(data => {
      console.log("data trabajos");
      console.log(data);
      this.contenido = data;
  });
}
}
