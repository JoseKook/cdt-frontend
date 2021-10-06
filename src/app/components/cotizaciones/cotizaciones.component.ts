import { Component, OnInit } from '@angular/core';
import { Producto, ProductosResponse } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {

  productos       : Producto[] = [];
  productosBuscar : Producto[] = [];
  displayModal    : boolean     = false;

  constructor( private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos()
      .subscribe( ( response: ProductosResponse ) => {
        this.productos = response.productos;
        this.productosBuscar = response.productos;
      });
  }

  buscarProducto( evento: any ){
    this.productosBuscar = this.productos.filter( (producto) => {
      let buscar = evento.target.value;
      return (  producto.sku.toUpperCase().includes(buscar.toUpperCase())
                || producto.nombre.toUpperCase().includes(buscar.toUpperCase()) );
    });
  }

  abrirModal( producto: Producto){
    this.displayModal = true;
  }

}
