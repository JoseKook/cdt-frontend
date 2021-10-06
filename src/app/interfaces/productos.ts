export interface ProductosResponse {
  productos: Producto[];
}

export interface Producto {
  descripcion: string;
  _id?: string;
  nombre: string;
  sku: string;
  precio: number | null;
}
