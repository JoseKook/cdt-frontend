import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { PlazosComponent } from './plazos/plazos.component';
import { PrimeNGModule } from '../prime-ng.module';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ProductosComponent,
    PlazosComponent,
    CotizacionesComponent,
    AgregarProductoComponent
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
