import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { BorrarComponent } from './componentes/formularios/alimentos/borrar/borrar.component';
import { LeerComponent } from './componentes/formularios/alimentos/leer/leer.component';
import { BeneficiariosComponent } from './componentes/formularios/beneficiarios/beneficiarios.component';
import { InfoAlimentoComponent } from './componentes/información/info-alimento/info-alimento.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { TarjetaBenefiComponent } from './componentes/tarjetas/tarjeta-benefi/tarjeta-benefi.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
