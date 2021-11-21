import { Component, OnInit } from '@angular/core';
import { LeerService } from 'src/app/servicios/leer.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

 
  urlAlimentos = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/alimentos";
  urlBeneficiarios = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/beneficiarios";
  urlCupones = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/cupones"
  urlProveedores = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/proveedors";
  urlTrabajos = "http://54.152.79.84:8080/hackathon-1.0.0-api/api/trabajos"

  load: boolean;

  alimentos: any;
  beneficiarios: any;
  cupones: any;
  proveedores: any;
  trabajos: any;

  listaAlimentos: any[] = [];
  listaBeneficiarios: any[] = [];
  listaCupones: any[] = [];
  listaProveedores: any[] = [];
  listaTrabajos: any[] = [];

  constructor(private read: LeerService) {
    this.load = true;

    this.read.codigoRespuesta(this.urlAlimentos).subscribe(data => {
      if (data.status == 200) {
        this.read.leerTodos(this.urlAlimentos).subscribe(data => {
          this.alimentos = data;
          console.log("this.alimentos");
          console.log(this.alimentos);
        });
      }
    });

    this.read.codigoRespuesta(this.urlCupones).subscribe(data => {
      if (data.status == 200) {
        this.read.leerTodos(this.urlCupones).subscribe(data => {
          this.cupones = data;
          console.log("this.cupones");
          console.log(this.cupones);

        });
      }
    });

    this.read.codigoRespuesta(this.urlProveedores).subscribe(data => {
      if (data.status == 200) {
        this.read.leerTodos(this.urlProveedores).subscribe(data => {
          this.proveedores = data;
          console.log("this.proveedores");
          console.log(this.proveedores);

        });
      }
    });

    this.read.codigoRespuesta(this.urlTrabajos).subscribe(data => {
      if (data.status == 200) {
        this.read.leerTodos(this.urlTrabajos).subscribe(data => {
          this.trabajos = data;
          console.log("this.trabajos");
          console.log(this.trabajos);

        });
      }
    });

    this.read.codigoRespuesta(this.urlBeneficiarios).subscribe(data => {
      console.log(data.status)
      if (data.status == 200) {
        this.read.leerTodos(this.urlBeneficiarios).subscribe(data => {
          this.beneficiarios = data;
          console.log("this.beneficiarios");
          console.log(this.beneficiarios);
        });
      }
    });


  }

  ngOnInit(): void {
  }



  buscar(bb: string) {
    console.log(bb);
    let a = this.beneficiarios.filter((el:any) => {
      if (bb != "") {
        if (el.nombre.includes(bb)) {
          return el;
        }
      }
      return "";
    });
    
    if (a.length == 0) {
      this.listaBeneficiarios = [];
    } else {
      this.listaBeneficiarios = a;
    }
    this.load=false;
    this.buscarAlimento(bb);
  }
  
  buscarAlimento(bb: string) {
    console.log(bb);
    let a = this.alimentos.filter((el:any) => {
      if (bb != "") {
        if (el.nombre.includes(bb)) {
          return el;
        }
      }
      return "";
    });
    
    if (a.length == 0) {
      this.listaAlimentos = [];
    } else {
      this.listaAlimentos = a;
    }
    this.load=false;
    this.buscarCupon(bb);
  }
  buscarCupon(bb: string) {
    console.log(bb);
    let a = this.cupones.filter((el:any) => {
      if (bb != "") {
        if (el.categoria.includes(bb)) {
          return el;
        }
      }
      return "";
    });
    
    if (a.length == 0) {
      this.listaCupones = [];
    } else {
      this.listaCupones = a;
    }
    this.load=false;
    this.buscarProv(bb);
  }
  buscarProv(bb: string) {
    console.log(bb);
    let a = this.proveedores.filter((el:any) => {
      if (bb != "") {
        if (el.nombre.includes(bb)) {
          return el;
        }
      }
      return "";
    });
    
    if (a.length == 0) {
      this.listaProveedores = [];
    } else {
      this.listaProveedores = a;
    }
    this.load=false;
    this.buscarTrab(bb);
  }
  buscarTrab(bb: string) {
    console.log(bb);
    let a = this.trabajos.filter((el:any) => {
      if (bb != "") {
        if (el.categoria.includes(bb)) {
          return el;
        }
      }
      return "";
    });
    
    if (a.length == 0) {
      this.listaTrabajos = [];
    } else {
      this.listaTrabajos = a;
    }
    this.load=false;
  }

 




}
