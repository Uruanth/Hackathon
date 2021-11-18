import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mostrar: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  funcion_mostrar() {  
    this.mostrar = !this.mostrar ;
  }

}
