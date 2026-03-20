import type { Servicio, Proyecto, PasoProceso, PuntoDoloroso } from '../types'

export const WHATSAPP_NUMBER = '18098480395'
export const WHATSAPP_MESSAGE = 'Hola, me interesa un sitio web para mi negocio.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

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
    texto: 'Estás perdiendo clientes antes de que te llamen.',
    comentario: '/* la primera impresión ya pasó */',
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
]

export const proyectos: Proyecto[] = [
  {
    id: 'fmax-rd',
    cliente: 'F MAX RD',
    descripcion:
      'F MAX RD necesitaba llegar a ingenieros y constructoras en todo el país. Construimos un sitio que comunica credibilidad técnica y genera consultas de nuevos clientes.',
    url: 'https://fmaxrd.com',
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
    descripcion: 'Sitio en vivo en 2–3 semanas. Tú quedas dueño de todo.',
  },
]
