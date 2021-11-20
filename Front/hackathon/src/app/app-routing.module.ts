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
import { TarjetaTrabComponent } from './componentes/tarjetas/tarjeta-trab/tarjeta-trab.component';
import { TarjetaCuponComponent } from './componentes/tarjetas/tarjeta-cupon/tarjeta-cupon.component';
import { InfoAlimentoComponent } from './componentes/información/info-alimento/info-alimento.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: LandingComponent },
  { path: 'alimentos/eliminar', component: BorrarComponent },
  { path: 'alimentos/leer', component: LeerComponent },
  { path: 'alimentos/:codigo', component: InfoAlimentoComponent },
  { path: 'beneficiarios/tarjeta', component: TarjetaBenefiComponent },
  { path: 'proveedores/agregar', component: AgregarProveedoresComponent},
  { path: 'proveedores/actualizar', component: ActualizarProveedoresComponent},
  { path: 'proveedores/eliminar', component: BorrarProveedoresComponent},
  { path: 'buscar', component: BuscarComponent },
  { path: 'cupones', component: TarjetaCuponComponent},
  { path: 'trabajos', component: TarjetaTrabComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
