import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-info-cupones',
  templateUrl: './info-cupones.component.html',
  styleUrls: ['./info-cupones.component.css']
})
export class InfoCuponesComponent implements OnInit {
  
  url = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/cupon/";
  codigo!: string;

  cupones: any;
  constructor(private cabecera: ActivatedRoute, private read: LeerService) {

    this.cabecera.params.subscribe(params => {
      this.codigo = params['categoria'];


    });
    this.read.leer(this.url, this.codigo).subscribe(data => {
      this.cupones = data;
    });

  }


  ngOnInit(): void {
  }
}
