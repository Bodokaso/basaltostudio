import type {
  Servicio,
  Proyecto,
  PasoProceso,
  PuntoDoloroso,
  Testimonio,
  ItemProof,
} from '../types'

export const SITE_URL = 'https://basaltostudio.com'
export const EMAIL = 'contacto@basaltostudio.com'

export const WHATSAPP_NUMBER = '18098480395'
export const WHATSAPP_DISPLAY = '+1 809-848-0395'
export const WHATSAPP_MESSAGE =
  'Hola, me interesa un sitio web o una aplicación para mi negocio.'

export function whatsappUrl(message: string = WHATSAPP_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_URL = whatsappUrl()

export const proofItems: ItemProof[] = [
  { label: 'RD', detail: '— Con base en Santo Domingo' },
  { label: 'Full-stack', detail: '— Frontend, backend y despliegue' },
  { label: '2–3 sem.', detail: '— Un sitio web, en vivo' },
  { label: 'Tuyo', detail: '— Código y dominio a tu nombre' },
]

export const puntosDolorosos: PuntoDoloroso[] = [
  {
    numero: '01',
    texto: 'Tus clientes te buscan en Google y no encuentran nada.',
    comentario: '/* o encuentran algo que asusta */',
  },
  {
    numero: '02',
    texto: 'Tu competencia tiene un sitio. El tuyo parece del 2011.',
    comentario: '/* no es culpa tuya. es urgente igual. */',
  },
  {
    numero: '03',
    texto: 'Tu operación vive en WhatsApp y hojas de cálculo. Cada pedido se pierde dos veces.',
    comentario: '/* el sistema existe. está en tu cabeza. */',
  },
]

export const servicios: Servicio[] = [
  {
    id: 'scratch',
    titulo: 'Sitio desde cero',
    descripcion:
      'Diseño y desarrollo completo. Rápido, móvil, listo para competir. Sin plantillas — hecho para tu negocio.',
  },
  {
    id: 'rediseno',
    titulo: 'Rediseño',
    descripcion:
      'Tu sitio existe pero no convence. Lo modernizamos para que trabaje por ti, no en tu contra.',
  },
  {
    id: 'landing',
    titulo: 'Landing page',
    descripcion:
      'Una sola página, un solo objetivo. Para campañas, lanzamientos, o cuando necesitas resultados rápido.',
  },
  {
    id: 'app',
    titulo: 'Aplicación a medida',
    descripcion:
      'Sistemas internos, portales de clientes, APIs e integraciones — pagos, WhatsApp, facturación. Software que reemplaza el caos.',
  },
]

export const proyectos: Proyecto[] = [
  {
    id: 'fmax-rd',
    cliente: 'F MAX RD',
    descripcion:
      'F MAX RD necesitaba llegar a ingenieros y constructoras en todo el país. Construimos un sitio que comunica credibilidad técnica y genera consultas de nuevos clientes.',
    url: 'https://fmaxrd.com',
    imagen: '/fmax-preview.webp',
    imagenAlt: 'Página de inicio del sitio web de F MAX RD',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Construcción', 'Santo Domingo'],
  },
]

export const pasosProceso: PasoProceso[] = [
  {
    numero: '01',
    titulo: 'Conversamos',
    descripcion:
      'Me cuentas de tu negocio. Sin formularios largos. Una llamada o mensaje de WhatsApp. Gratis.',
  },
  {
    numero: '02',
    titulo: 'Diseño y construyo',
    descripcion: 'Diseño + desarrollo. Tú apruebas cada etapa. Sin sorpresas.',
  },
  {
    numero: '03',
    titulo: 'Lanzamos',
    descripcion:
      'Un sitio web está en vivo en 2–3 semanas. Una aplicación, según su alcance — con fechas claras desde el día uno. Tú quedas dueño de todo.',
  },
]

export const tiposProyecto = [
  'Sitio web nuevo',
  'Rediseño',
  'Landing page',
  'Aplicación a medida',
  'No estoy seguro',
] as const

/**
 * The testimonial only renders once `nombre` is filled in.
 * An anonymous quote reads as a placeholder; a named one builds trust.
 */
export const testimonio: Testimonio = {
  cita: 'El sitio que Basalto nos entregó superó lo que esperábamos. Profesional, rápido, y nuestros clientes lo notan inmediatamente.',
  nombre: '',
  cargo: '',
  empresa: 'F MAX RD',
  ciudad: 'Santo Domingo, RD',
}
