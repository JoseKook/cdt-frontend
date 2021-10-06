import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto, ProductosResponse } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';
import { AgregarCotizacionComponent } from '../agregar-cotizacion/agregar-cotizacion.component';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {

  productos             : Producto[] = [];
  productosBuscar       : Producto[] = [];
  productoSeleccionado! : Producto;
  displayModal          : boolean     = false;
  @ViewChild('agregarCotizacionModal') agregarCotizacionModal!: AgregarCotizacionComponent;

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
                || producto.nombre.toUpperCase().includes(buscar.toUpperCase())
                || producto.descripcion.toUpperCase().includes(buscar.toUpperCase()) );
    });
  }

  abrirModal( producto: Producto){
    this.agregarCotizacionModal.limpiarDatos();
    this.agregarCotizacionModal.valorPlazoSelect = '';
    this.productoSeleccionado = producto;
    this.displayModal = true;
  }

}
