import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './componentes/formularios/proveedores/proveedores.component';
import { BeneficiariosComponent } from './componentes/formularios/beneficiarios/beneficiarios.component';
import { AlimentosComponent } from './componentes/formularios/alimentos/alimentos.component';
import { AgregarComponent } from './componentes/formularios/alimentos/agregar/agregar.component';
import { LeerComponent } from './componentes/formularios/alimentos/leer/leer.component';
import { BorrarComponent } from './componentes/formularios/alimentos/borrar/borrar.component';
import { FooterComponent } from './componentes-estaticos/footer/footer.component';
import { NavbarComponent } from './componentes-estaticos/navbar/navbar.component';
import { SidebarComponent } from './componentes-estaticos/sidebar/sidebar.component';
import { ActualizarComponent } from './componentes/formularios/alimentos/actualizar/actualizar.component';
import { TarjetaProvComponent } from './componentes/tarjetas/tarjeta-prov/tarjeta-prov.component';


@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    BeneficiariosComponent,
    AlimentosComponent,
    AgregarComponent,
    LeerComponent,
    BorrarComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ActualizarComponent,
    TarjetaProvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
