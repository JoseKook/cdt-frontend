import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Producto } from 'src/app/interfaces/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  @Output() productoAgregado  : EventEmitter<boolean> = new EventEmitter();
  edadValida        : boolean = true;

  formulario    : FormGroup = this.formBuilder.group({
    _id         : [null],
    descripcion : ['', Validators.required],
    nombre      : ['', Validators.required],
    sku         : ['', Validators.required],
    precio      : ['', Validators.required],
  });

  constructor(  private formBuilder: FormBuilder,
                private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  campoEsValido( campo: string ) {
    return this.formulario.controls[campo].errors
            && this.formulario.controls[campo].touched;
  }

  submitFormulario(){
    if ( this.formulario.invalid )  {
      this.formulario.markAllAsTouched();
      return;
    } else {
      let data = this.formulario.value;
      data.sku = String(data.sku).toUpperCase();
      this.productosService.setProducto(data)
        .subscribe( ( response: Producto ) => {
          this.formulario.reset();
          this.productoAgregado.emit(true);
        });
    }
  }
}
