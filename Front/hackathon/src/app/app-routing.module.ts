import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { BorrarComponent } from './componentes/formularios/alimentos/borrar/borrar.component';
import { LeerComponent } from './componentes/formularios/alimentos/leer/leer.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { TarjetaBenefiComponent } from './componentes/tarjetas/tarjeta-benefi/tarjeta-benefi.component';
import { ActualizarProveedoresComponent } from './componentes/formularios/proveedores/actualizar-proveedores/actualizar-proveedores.component';
import { AgregarProveedoresComponent } from './componentes/formularios/proveedores/agregar-proveedores/agregar-proveedores.component';
import { BorrarProveedoresComponent } from './componentes/formularios/proveedores/borrar-proveedores/borrar-proveedores.component';
import { BeneficiariosComponent } from './componentes/formularios/beneficiarios/beneficiarios.component';
import { TarjetaTrabComponent } from './componentes/tarjetas/tarjeta-trab/tarjeta-trab.component';
import { TarjetaCuponComponent } from './componentes/tarjetas/tarjeta-cupon/tarjeta-cupon.component';
import { InfoAlimentoComponent } from './componentes/información/info-alimento/info-alimento.component';
import { TarjetAlimComponent } from './componentes/tarjetas/tarjet-alim/tarjet-alim.component';
import { TarjetaProvComponent } from './componentes/tarjetas/tarjeta-prov/tarjeta-prov.component';
import { InfoBeneficiariosComponent } from './componentes/información/info-beneficiarios/info-beneficiarios.component';
import { InfoProveedoresComponent } from './componentes/información/info-proveedores/info-proveedores.component';
import { InfoCuponesComponent } from './componentes/información/info-cupones/info-cupones.component';
import { InfoTrabajosComponent } from './componentes/información/info-trabajos/info-trabajos.component';

const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LandingComponent },
  { path: 'alimentos/eliminar', component: BorrarComponent },
  { path: 'alimentos/leer', component: LeerComponent },
  { path: 'alimentos/tarjeta', component: TarjetAlimComponent },
  { path: 'alimentos/:codigo', component: InfoAlimentoComponent },
  { path: 'beneficiarios/tarjeta', component: TarjetaBenefiComponent },
  { path: 'beneficiarios/agregar', component: BeneficiariosComponent },
  { path: 'beneficiarios/:codigo', component:  InfoBeneficiariosComponent },
  { path: 'proveedores/agregar', component: AgregarProveedoresComponent},
  { path: 'proveedores/actualizar', component: ActualizarProveedoresComponent},
  { path: 'proveedores/eliminar', component: BorrarProveedoresComponent},
  { path: 'proveedores/tarjeta', component: TarjetaProvComponent},
  { path: 'proveedores/:codigo', component: InfoProveedoresComponent},
  { path: 'beneficiario', component: BeneficiariosComponent},
  { path: 'buscar', component: BuscarComponent },
  { path: 'cupones', component: TarjetaCuponComponent},
  { path: 'cupones/:categoria', component: InfoCuponesComponent},
  { path: 'trabajos/:categoria', component: InfoTrabajosComponent},
  { path: 'trabajos', component: TarjetaTrabComponent},
  { path: 'cupones', component: TarjetaCuponComponent},
  { path: 'trabajos', component: TarjetaTrabComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
