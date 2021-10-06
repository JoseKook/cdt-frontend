import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plazo } from 'src/app/interfaces/plazos';
import { PlazosService } from 'src/app/services/plazos.service';

@Component({
  selector: 'app-agregar-plazo',
  templateUrl: './agregar-plazo.component.html',
  styleUrls: ['./agregar-plazo.component.css']
})
export class AgregarPlazoComponent implements OnInit {

  @Output() plazoAgregado : EventEmitter<boolean> = new EventEmitter();
  edadValida : boolean = true;

  formulario : FormGroup = this.formBuilder.group({
    _id           : [null],
    nombre        : ['', Validators.required],
    semanas       : ['', Validators.required],
    abono_normal  : ['', Validators.required],
    abono_puntual : ['', Validators.required],
  });

  constructor(  private formBuilder: FormBuilder,
                private plazoService: PlazosService) { }

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
      this.plazoService.setPlazo(data)
        .subscribe( ( response: Plazo ) => {
          this.formulario.reset();
          this.plazoAgregado.emit(true);
        });
    }
  }

}
