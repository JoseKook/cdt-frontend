import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { PlazosComponent } from './components/plazos/plazos.component';
import { ProductosComponent } from './components/productos/productos.component';


const routes: Routes = [
  {
    path: '',
    component: ProductosComponent
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'plazos',
    component: PlazosComponent
  },
  {
    path: 'contizacion',
    component: CotizacionesComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: ''
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
