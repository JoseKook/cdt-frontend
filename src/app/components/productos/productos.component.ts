import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  constructor( private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.getProductos()
      .subscribe( ( response ) => {
        this.productos = response.productos;
      });
  }

}
