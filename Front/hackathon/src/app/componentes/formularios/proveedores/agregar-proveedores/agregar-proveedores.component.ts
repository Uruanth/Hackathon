import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-proveedores',
  templateUrl: './agregar-proveedores.component.html',
  styleUrls: ['./agregar-proveedores.component.css']
})
export class AgregarProveedoresComponent {

  opcionSelect: string = '0';
  mostrar!: number;
  opcionSelect2: string = '0';
  mostrar2!: number;

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

  capturar2() {

    if (this.opcionSelect2 == "1"){
      this.mostrar2 = 1;
      
    } else if (this.opcionSelect2 =="2") {
      this.mostrar2 = 2;
    } else {
      this.mostrar2 = 0;
    }
    console.log(this.mostrar2);
    console.log(this.opcionSelect2);
}

}

