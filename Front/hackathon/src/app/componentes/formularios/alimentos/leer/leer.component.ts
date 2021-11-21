import { Component, OnInit } from '@angular/core';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit {

  urlapi = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/alimento/";

  codigo: string = "";
  lista: any;
  flag = false;
  constructor(private re: LeerService) { }

  ngOnInit(): void {

  }

  buscar() {
    this.re.leer(this.urlapi, this.codigo).subscribe(data => {
      this.lista = data;
      if(this.lista.length > 0) {
        this.flag = true;
      }
    });
  }



}

