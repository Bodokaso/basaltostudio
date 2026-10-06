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
  imagen: string
  imagenAlt: string
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

export interface Testimonio {
  cita: string
  /** Leave empty to hide the section until a named client agrees to be quoted. */
  nombre: string
  cargo: string
  empresa: string
  ciudad: string
}

export interface ItemProof {
  label: string
  detail: string
}
