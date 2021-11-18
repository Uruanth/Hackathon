import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './componentes/formularios/proveedores/proveedores.component';
import { BeneficiariosComponent } from './componentes/formularios/beneficiarios/beneficiarios.component';
import { AlimentosComponent } from './componentes/formularios/alimentos/alimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    BeneficiariosComponent,
    AlimentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
