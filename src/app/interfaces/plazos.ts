export interface PlazosResponse {
  plazos: Plazo[];
}

export interface Plazo {
  _id?: string;
  nombre: string;
  semanas: number | null;
  abono_normal: number | null;
  abono_puntual: number | null;
}
