import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-tarjeta-benefi',
  templateUrl: './tarjeta-benefi.component.html',
  styleUrls: ['./tarjeta-benefi.component.css']
})
export class TarjetaBenefiComponent implements OnInit {

 urlapi = "http://54.152.79.84:8080/hackathon-0.0.1-hackathon/api/beneficiarios";

  @Input() benefi: any = [];

  lista2!: any;
  constructor(private router: Router, private read: LeerService) { 

   this.read.leerTodos(this.urlapi).subscribe(data => {
     if(this.benefi.length == 0){
        this.benefi = data;
     }
   })
  }
  
  ngOnInit(): void {
    

  }


verInfo(a:any){
  console.log(a.codigo);
  this.router.navigate(['alimentos', a.codigo])
}

}
