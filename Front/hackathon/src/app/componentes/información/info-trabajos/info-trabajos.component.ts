import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-info-trabajos',
  templateUrl: './info-trabajos.component.html',
  styleUrls: ['./info-trabajos.component.css']
})
export class InfoTrabajosComponent implements OnInit {

  url = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/trabajo/";
  codigo!: string;

  trabajos: any;
  constructor(private cabecera: ActivatedRoute, private read: LeerService) {

    this.cabecera.params.subscribe(params => {
      console.log(params['categoria']);
      this.codigo = params['categoria'];


    });
    this.read.leer(this.url, this.codigo).subscribe(data => {
      console.log("data");
      console.log(data);
      this.trabajos = data;
    });

  }


  ngOnInit(): void {
  }

}
