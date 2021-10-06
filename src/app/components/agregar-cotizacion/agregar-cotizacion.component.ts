import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Plazo, PlazosResponse } from 'src/app/interfaces/plazos';
import { Producto } from 'src/app/interfaces/productos';
import { PlazosService } from 'src/app/services/plazos.service';

@Component({
  selector: 'app-agregar-cotizacion',
  templateUrl: './agregar-cotizacion.component.html',
  styleUrls: ['./agregar-cotizacion.component.css']
})
export class AgregarCotizacionComponent implements OnInit {

  @Input() producto!: Producto;
  valorPlazoSelect  : string  = '';
  plazos            : Plazo[] = [];
  abono_normal      : string  = '';
  abono_puntual     : string  = '';
  plazoSeleccionado : Plazo   = {
    _id: '',
    nombre: 'Selecciona Plazo...',
    semanas: 0,
    abono_normal: 0,
    abono_puntual: 0
  };

  constructor( private plazoService: PlazosService ) { }

  ngOnInit(): void {
    this.plazoService.getPlazos()
      .subscribe( ( response: PlazosResponse ) => {
        this.plazos = response.plazos;
        this.plazos.unshift({
          _id: '',
          nombre: 'Selecciona Plazo...',
          semanas: 0,
          abono_normal: 0,
          abono_puntual: 0
        });
      });
  }

  seleccionaPlazo( dato: any ){
    let plazo = this.plazos.find( plazo => plazo._id == dato.value);
    if( typeof plazo !== 'undefined' ){
      this.plazoSeleccionado = plazo;
      this.abono_normal = (((this.producto.precio! * plazo.abono_normal!) + this.producto.precio!)/plazo.semanas!).toString();
      this.abono_puntual = (((this.producto.precio! * plazo.abono_puntual!) + this.producto.precio!)/plazo.semanas!).toString();
    }
  }

  limpiarDatos(){
    this.producto = {
      _id: '',
      nombre: '',
      descripcion: '',
      precio: 0,
      sku: ''
    }
    this.plazoSeleccionado = {
      _id: '',
      nombre: 'Selecciona Plazo...',
      semanas: 0,
      abono_normal: 0,
      abono_puntual: 0
    };
  }
}
