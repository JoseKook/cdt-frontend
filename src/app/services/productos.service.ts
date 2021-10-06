import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Producto, ProductosResponse } from '../interfaces/productos';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos():Observable<ProductosResponse>{
    const url = `${ environment.apiUrl }/productos/`;
    return this.http.get<ProductosResponse>(url);
  }

  setProducto( producto: Producto ):Observable<Producto>{
    if( producto._id ){
      // Actualizar
      const url = `${ environment.apiUrl }/productos/${ producto._id }`;
      return this.http.put<Producto>(url, producto);
    } else {
      // Agregar
      const url = `${ environment.apiUrl }/productos/`;
      return this.http.post<Producto>(url, producto);
    }
  }

  deleteProducto( id: string ):Observable<Producto>{
    const url = `${ environment.apiUrl }/productos/${ id }`;
    return this.http.delete<Producto>(url);
  }

}
