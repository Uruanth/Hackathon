import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-alimento',
  templateUrl: './info-alimento.component.html',
  styleUrls: ['./info-alimento.component.css']
})
export class InfoAlimentoComponent implements OnInit {


  constructor(private cabecera: ActivatedRoute) { 

   this.cabecera.params.subscribe(params => {
     console.log(params['codigo']);
   })

  }

  ngOnInit(): void {



  }

  

}
