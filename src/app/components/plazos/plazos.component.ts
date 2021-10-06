import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Plazo } from 'src/app/interfaces/plazos';

import { PlazosService } from 'src/app/services/plazos.service';
import { AgregarPlazoComponent } from '../agregar-plazo/agregar-plazo.component';

@Component({
  selector: 'app-plazos',
  templateUrl: './plazos.component.html',
  styleUrls: ['./plazos.component.css']
})
export class PlazosComponent implements OnInit {

  plazos          : Plazo[]  = [];
  displayModal    : boolean     = false;
  tituloModal     : string      = 'Agregar un Producto';
  @ViewChild('formularioPlazo')  formularioPlazo! : AgregarPlazoComponent;

  constructor(  private plazosService: PlazosService,
                private confirmationService: ConfirmationService,
                private messageService: MessageService) { }

  ngOnInit(): void {
    this.getPlazos();
  }

  getPlazos(){
    this.plazosService.getPlazos()
      .subscribe( ( response ) => {
        this.plazos = response.plazos;
      });
  }

  agregarPlazo(){
    this.formularioPlazo.formulario.reset();
    this.displayModal   = true;
    this.tituloModal    = 'Agregar un Plazo';
  }

  plazoAgregado(){
    this.getPlazos();
    this.displayModal = false;
    this.mostrarToast('Agregado','Plazo Agregado');
  }

  editarPlazo( plazo: Plazo){
    this.formularioPlazo.formulario.setValue({ ...plazo });
    this.formularioPlazo.formulario.markAllAsTouched();
    this.displayModal   = true;
    this.tituloModal   = 'Editar Plazo';
  }

  borrarPlazo( id: string){
    this.confirmationService.confirm({
      message: 'Se perderá por completo el plazo',
      header: '¿Está seguro?',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.plazosService.deletePlazo(id)
            .subscribe( ( plazo ) => {
              this.getPlazos();
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
