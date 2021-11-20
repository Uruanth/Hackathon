import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-tarjet-alim',
  templateUrl: './tarjet-alim.component.html',
  styleUrls: ['./tarjet-alim.component.css']
})
export class TarjetAlimComponent implements OnInit {

  urlbase = "http://54.152.79.84:8080/hackathon-0.0.1-hackathon/api/alimentos";


  lista: any = [];

  constructor(private read: LeerService, private router: Router) { }

  ngOnInit(): void {

    
    this.read.leerTodos(this.urlbase).subscribe( data => {
      this.lista = data;
      console.log(this.lista);
      for(let a of this.lista) {
        console.log(a);
      }

    });

  }


  verInfo(a:any){
    console.log(a.codigo);
    this.router.navigate(['alimentos', a.codigo])
  }

}
