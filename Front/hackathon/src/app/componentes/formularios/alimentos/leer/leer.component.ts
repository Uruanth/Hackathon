import { Component, OnInit } from '@angular/core';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrls: ['./leer.component.css']
})
export class LeerComponent implements OnInit {

  urlapi = "http://localhost:8080/api/alimento";

  codigo!:string;



  constructor(private re: LeerService) { }

  ngOnInit(): void {

    this.leerTodos();

  }

leerTodos():void {
  let cont = this.re.leerTodos((this.urlapi+"s"));
  let otro!:any[];
  console.log("retorno")
  console.log(cont);

}

leerByCode(){
  let cont = this.re.leer(this.urlapi, this.codigo);
  console.log(cont);

}



}
