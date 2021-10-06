import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    path: 'productos/:id',
    component: ProductosComponent
  },
  {
    path: 'plazos',
    component: PlazosComponent
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
