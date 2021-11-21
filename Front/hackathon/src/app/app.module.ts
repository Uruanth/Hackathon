import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
//import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


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
import { TarjetaTrabComponent } from './componentes/tarjetas/tarjeta-trab/tarjeta-trab.component';
import { TarjetaCuponComponent } from './componentes/tarjetas/tarjeta-cupon/tarjeta-cupon.component';
import { InfoAlimentoComponent } from './componentes/información/info-alimento/info-alimento.component';
import { LeerProveedoresComponent } from './componentes/formularios/proveedores/leer-proveedores/leer-proveedores.component';
import { ActualizarProveedoresComponent } from './componentes/formularios/proveedores/actualizar-proveedores/actualizar-proveedores.component';
import { AgregarProveedoresComponent } from './componentes/formularios/proveedores/agregar-proveedores/agregar-proveedores.component';
import { BorrarProveedoresComponent } from './componentes/formularios/proveedores/borrar-proveedores/borrar-proveedores.component';
import { InfoProveedoresComponent } from './componentes/información/info-proveedores/info-proveedores.component';
import { InfoBeneficiariosComponent } from './componentes/información/info-beneficiarios/info-beneficiarios.component';
import { LandingComponent } from './componentes/landing/landing.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import { InfoCuponesComponent } from './componentes/información/info-cupones/info-cupones.component';
import { InfoTrabajosComponent } from './componentes/información/info-trabajos/info-trabajos.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { TarjetAlimComponent } from './componentes/tarjetas/tarjet-alim/tarjet-alim.component';




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
    TarjetaTrabComponent,
    TarjetaCuponComponent,
    InfoAlimentoComponent,
    LeerProveedoresComponent,
    ActualizarProveedoresComponent,
    AgregarProveedoresComponent,
    BorrarProveedoresComponent,
    InfoProveedoresComponent,
    InfoBeneficiariosComponent,
    LandingComponent,
    BuscarComponent,
    InfoCuponesComponent,
    InfoTrabajosComponent,
    LoadingComponent,
    TarjetAlimComponent



  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    DataTablesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
