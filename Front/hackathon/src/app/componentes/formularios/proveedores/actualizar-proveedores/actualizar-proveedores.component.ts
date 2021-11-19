import { Component } from '@angular/core';

@Component({
  selector: 'app-actualizar-proveedores',
  templateUrl: './actualizar-proveedores.component.html',
  styleUrls: ['./actualizar-proveedores.component.css']
})
export class ActualizarProveedoresComponent {

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

