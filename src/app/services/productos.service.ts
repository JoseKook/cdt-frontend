import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductosResponse } from '../interfaces/productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos():Observable<ProductosResponse>{
    const url = `${ environment.apiUrl }/productos/`;
    return this.http.get<ProductosResponse>(url);
  }
}
