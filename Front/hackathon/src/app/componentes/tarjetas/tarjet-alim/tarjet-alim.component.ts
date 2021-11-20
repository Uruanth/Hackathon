import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { PruebasService } from 'src/app/servicios/pruebas.service';

@Component({
  selector: 'app-tarjet-alim',
  templateUrl: './tarjet-alim.component.html',
  styleUrls: ['./tarjet-alim.component.css']
})
export class TarjetAlimComponent implements OnInit {

  urlbase = "";
  codigo = "";


  lista: any = [];

  constructor(private pru: PruebasService) { }

  ngOnInit(): void {

    
    this.pru.otroMetodo().subscribe( data => {
      console.log(data);
      this.lista = data;
      console.log("this.lista");
      console.log(this.lista);
      for(let a of this.lista) {
        console.log(a);
      }

    });

  }

}
