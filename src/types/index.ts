export interface Servicio {
  id: string
  titulo: string
  descripcion: string
}

export interface Proyecto {
  id: string
  cliente: string
  descripcion: string
  url: string
  tags: string[]
}

export interface PasoProceso {
  numero: string
  titulo: string
  descripcion: string
}

export interface PuntoDoloroso {
  numero: string
  texto: string
  comentario: string
}
