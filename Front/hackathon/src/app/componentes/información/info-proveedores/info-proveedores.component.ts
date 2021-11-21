import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-info-proveedores',
  templateUrl: './info-proveedores.component.html',
  styleUrls: ['./info-proveedores.component.css']
})
export class InfoProveedoresComponent implements OnInit {

  url = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/proveedor/";
  codigo!: string;

  proveedor: any;
  constructor(private cabecera: ActivatedRoute, private read: LeerService) {

    this.cabecera.params.subscribe(params => {
      this.codigo = params['codigo'];


    });
    this.read.leer(this.url, this.codigo).subscribe(data => {
      this.proveedor = data;
    });

  }


  ngOnInit(): void {
  }

}
