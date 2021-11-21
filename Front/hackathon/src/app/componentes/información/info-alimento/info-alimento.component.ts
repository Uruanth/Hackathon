import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-info-alimento',
  templateUrl: './info-alimento.component.html',
  styleUrls: ['./info-alimento.component.css']
})
export class InfoAlimentoComponent implements OnInit {

  urlbase = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/alimento/";
  alimento: any;
  codigo!: string;

  constructor(private cabecera: ActivatedRoute, private read: LeerService) {

    this.cabecera.params.subscribe(params => {
      this.codigo = params['codigo'];

      this.read.leer(this.urlbase, this.codigo).subscribe(data => {
        this.alimento = data;
      });

    })

  }

  ngOnInit(): void {



  }



}
