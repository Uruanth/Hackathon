import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-info-beneficiarios',
  templateUrl: './info-beneficiarios.component.html',
  styleUrls: ['./info-beneficiarios.component.css']
})
export class InfoBeneficiariosComponent implements OnInit {

  url = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/beneficiario/";
  codigo!: string;

  beneficiario: any;
  constructor(private cabecera: ActivatedRoute, private read: LeerService) {

    this.cabecera.params.subscribe(params => {
      this.codigo = params['codigo'];


    });
    this.read.leer(this.url, this.codigo).subscribe(data => {
      this.beneficiario = data;
    });

  }


  ngOnInit(): void {
  }

}
