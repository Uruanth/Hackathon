import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { BorrarComponent } from './componentes/formularios/alimentos/borrar/borrar.component';
import { LeerComponent } from './componentes/formularios/alimentos/leer/leer.component';
import { BeneficiariosComponent } from './componentes/formularios/beneficiarios/beneficiarios.component';
import { InfoAlimentoComponent } from './componentes/información/info-alimento/info-alimento.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { TarjetaBenefiComponent } from './componentes/tarjetas/tarjeta-benefi/tarjeta-benefi.component';
import { LeerProveedoresComponent } from './componentes/formularios/proveedores/leer-proveedores/leer-proveedores.component';
import { ActualizarProveedoresComponent } from './componentes/formularios/proveedores/actualizar-proveedores/actualizar-proveedores.component';
import { AgregarProveedoresComponent } from './componentes/formularios/proveedores/agregar-proveedores/agregar-proveedores.component';
import { BorrarProveedoresComponent } from './componentes/formularios/proveedores/borrar-proveedores/borrar-proveedores.component';
import { BeneficiariosComponent } from './componentes/formularios/beneficiarios/beneficiarios.component';
import { TarjetaProvComponent } from './componentes/tarjetas/tarjeta-prov/tarjeta-prov.component';
import { TarjetaTrabComponent } from './componentes/tarjetas/tarjeta-trab/tarjeta-trab.component';
import { TarjetaCuponComponent } from './componentes/tarjetas/tarjeta-cupon/tarjeta-cupon.component';
import { InfoProveedoresComponent } from './componentes/información/info-proveedores/info-proveedores.component';
import { InfoBeneficiariosComponent } from './componentes/información/info-beneficiarios/info-beneficiarios.component';
import { InfoDonacionComponent } from './componentes/información/info-donacion/info-donacion.component';
import { InfoCuponesComponent } from './componentes/información/info-cupones/info-cupones.component';
import { InfoTrabajosComponent } from './componentes/información/info-trabajos/info-trabajos.component';
import { InfoAlimentoComponent } from './componentes/información/info-alimento/info-alimento.component';

const routes: Routes = [

  { path: 'home', component: LandingComponent },
  { path: 'alimentos/eliminar', component: BorrarComponent },
  { path: 'alimentos/leer', component: LeerComponent },
  { path: 'beneficiarios/tarjeta', component: TarjetaBenefiComponent },
  { path: 'beneficiarios/agregar', component: BeneficiariosComponent },
  { path: 'alimentos/:codigo', component: InfoAlimentoComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
  { path: 'proveedores/agregar', component: AgregarProveedoresComponent},
  { path: 'proveedores/actualizar', component: ActualizarProveedoresComponent},
  { path: 'proveedores/eliminar', component: BorrarProveedoresComponent},
  { path: 'beneficiario', component: BeneficiariosComponent},
  { path: 'cupones', component: TarjetaCuponComponent},
  { path: 'trabajos', component: TarjetaTrabComponent},
  { path: 'info/alimentos', component: InfoAlimentoComponent},
  { path: 'info/proveedores', component: InfoProveedoresComponent},
  { path: 'info/beneficiarios', component: InfoBeneficiariosComponent},
  { path: 'info/donacion', component: InfoDonacionComponent},
  { path: 'info/cupones', component: InfoCuponesComponent},
  { path: 'info/trabajo', component: InfoTrabajosComponent},
  { path: 'cupones', component: TarjetaCuponComponent},
  { path: 'trabajos', component: TarjetaTrabComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
