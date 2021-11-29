import { Component, OnInit } from '@angular/core';
import { CrearService } from 'src/app/servicios/crear.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-beneficiarios',
  templateUrl: './beneficiarios.component.html',
  styleUrls: ['./beneficiarios.component.css']
})
export class BeneficiariosComponent implements OnInit {

  codigo!: string;
  edades!: number;
  motivoSolicitud!: string;
  nombre!: string;
  personasACargo!: number;
  requisitos!: string;
  usoEstimado!: string;
  urlapi = "http://localhost:8080/api/beneficiario/";
  estado!: number;

  constructor(private crear: CrearService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  crearBene() {
    let body = {
      "codigo": this.codigo,
      "edades": this.edades,
      "motivoSolicitud": this.motivoSolicitud,
      "nombre": this.nombre,
      "personasACargo": this.personasACargo,
      "requisitosNutricionales": this.requisitos,
      "usoEstimado": this.usoEstimado
    }

    this.crear.codigoRespuesta(this.urlapi, body).subscribe(data => {
      this.estado = data.status;
      this.comparar();
    });
  }

  comparar() {
    if (this.estado === 200) {
      this.showNotification('top', 'right', 1);

    } else {
      console.log(this.estado)
      this.showNotification('top', 'right', 2);
    }
  }

  showNotification(from: string, align: string, type: number) {
    switch (type) {
      case 1:
        this.toastr.success('<span><i class="fas fa-check"></i> </span><b>Beneficiario creado con exito</b>', '', {
          disableTimeOut: false,
          closeButton: true,
          enableHtml: true,
          toastClass: 'alert alert-success alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      case 2:
        this.toastr.error('<span><i class="fas fa-times"></i> </span><b>Error al crear el beneficiario</b>', '', {
          disableTimeOut: false,
          enableHtml: true,
          closeButton: true,
          toastClass: 'alert alert-danger alert-with-icon',
          positionClass: 'toast-' + from + '-' + align
        });
        break;
      default:
        break;
    }
  }
}
