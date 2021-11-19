import { Component } from '@angular/core';

@Component({
  selector: 'app-borrar-proveedores',
  templateUrl: './borrar-proveedores.component.html',
  styleUrls: ['./borrar-proveedores.component.css']
})
export class BorrarProveedoresComponent {

  opcionSelect: string = '0';
  mostrar!: number;

  constructor(){
  }  

  capturar() {

      if (this.opcionSelect == "1"){
        this.mostrar = 1;
        
      } else if (this.opcionSelect =="2") {
        this.mostrar = 2;
      } else {
        this.mostrar = 0;
      }
      console.log(this.mostrar);
      console.log(this.opcionSelect);
  }
}
