import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';


import { Producto } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';
import { AgregarProductoComponent } from '../agregar-producto/agregar-producto.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos       : Producto[]  = [];
  displayModal    : boolean     = false;
  tituloModal     : string      = 'Agregar un Producto';
  @ViewChild('formularioProducto')  formularioProducto! : AgregarProductoComponent;

  constructor(  private productosService: ProductosService,
                private confirmationService: ConfirmationService,
                private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productosService.getProductos()
      .subscribe( ( response ) => {
        this.productos = response.productos;
      });
  }

  agregarProducto(){
    this.formularioProducto.formulario.reset();
    this.displayModal   = true;
    this.tituloModal    = 'Agregar un Producto';
  }

  productoAgregado(){
    this.getProductos();
    this.displayModal = false;
    this.mostrarToast('Agregado','Producto Agregado');
  }

  editarProducto( producto: Producto){
    //this.formularioProducto.productoEditar = { ...producto };
    this.formularioProducto.formulario.setValue({ ...producto });
    this.formularioProducto.formulario.markAllAsTouched();
    this.displayModal   = true;
    this.tituloModal   = 'Editar Producto';
  }

  borrarProducto( id: string){
    this.confirmationService.confirm({
      message: 'Se perderá por completo el producto',
      header: '¿Está seguro?',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.productosService.deleteProducto(id)
            .subscribe( ( producto ) => {
              this.getProductos();
              this.mostrarToast('Eliminado','');
            });
      }
  });
  }

  mostrarToast( summary: string, detail: string ){
    this.messageService.add({
      severity:'success',
      summary,
      detail
    });
  }

}
