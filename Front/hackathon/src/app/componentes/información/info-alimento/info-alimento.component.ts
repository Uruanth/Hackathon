import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PruebasService } from 'src/app/servicios/pruebas.service';

@Component({
  selector: 'app-info-alimento',
  templateUrl: './info-alimento.component.html',
  styleUrls: ['./info-alimento.component.css']
})
export class InfoAlimentoComponent implements OnInit {


  constructor(private ser: PruebasService) { 

   

  }

  ngOnInit(): void {



  }

  

}
