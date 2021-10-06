import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Plazo, PlazosResponse } from '../interfaces/plazos';

@Injectable({
  providedIn: 'root'
})
export class PlazosService {

  constructor(private http: HttpClient) { }

  getPlazos():Observable<PlazosResponse>{
    const url = `${ environment.apiUrl }/plazos/`;
    return this.http.get<PlazosResponse>(url);
  }

  setPlazo( plazo: Plazo ):Observable<Plazo>{
    if( plazo._id ){
      // Actualizar
      const url = `${ environment.apiUrl }/plazos/${ plazo._id }`;
      return this.http.put<Plazo>(url, plazo);
    } else {
      // Agregar
      const url = `${ environment.apiUrl }/plazos/`;
      return this.http.post<Plazo>(url, plazo);
    }
  }

  deletePlazo( id: string ):Observable<Plazo>{
    const url = `${ environment.apiUrl }/plazos/${ id }`;
    return this.http.delete<Plazo>(url);
  }
}
