import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

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
import { TarjetaBenefiComponent } from './componentes/tarjetas/tarjeta-benefi/tarjeta-benefi.component';
import { LeerProveedoresComponent } from './componentes/formularios/proveedores/leer-proveedores/leer-proveedores.component';
import { ActualizarProveedoresComponent } from './componentes/formularios/proveedores/actualizar-proveedores/actualizar-proveedores.component';
import { AgregarProveedoresComponent } from './componentes/formularios/proveedores/agregar-proveedores/agregar-proveedores.component';
import { BorrarProveedoresComponent } from './componentes/formularios/proveedores/borrar-proveedores/borrar-proveedores.component';


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
    TarjetaProvComponent,
    TarjetaBenefiComponent,
    LeerProveedoresComponent,
    ActualizarProveedoresComponent,
    AgregarProveedoresComponent,
    BorrarProveedoresComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
