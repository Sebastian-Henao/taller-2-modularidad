import { SistemaDeDisenoInterface } from '../../modules/sistemas-de-diseno/interfaces/sistema-de-diseno.interface';

/** Contenido educativo que presenta el módulo de sistemas de diseño. */
export const SISTEMAS_DE_DISENO: SistemaDeDisenoInterface = {
  docente: 'Jesus David Mejia',
  concepto: {
    titulo: '¿Qué es un Sistema de Diseño?',
    descripcion: 'Es un conjunto de principios, reglas, componentes y patrones reutilizables que asegura la consistencia visual y funcional de un producto digital. Funciona como un puente entre los equipos de diseño y desarrollo, permitiendo escalar interfaces de forma ordenada.',
  },
  utilidad: {
    titulo: '¿Por qué usarlos?',
    beneficios: [
      { titulo: 'Reducción de inconsistencias', detalle: 'Evita variaciones visuales y de comportamiento entre las distintas pantallas de la interfaz.' },
      { titulo: 'Mejora de la mantenibilidad', detalle: 'Facilita la actualización y mantenimiento del frontend al centralizar los componentes.' },
      { titulo: 'Colaboración entre equipos', detalle: 'Establece un lenguaje común que agiliza la comunicación entre diseñadores y desarrolladores.' },
      { titulo: 'Escalabilidad de producto y marca', detalle: 'Permite hacer crecer la aplicación manteniendo la identidad de la marca uniforme.' },
      { titulo: 'Aceleración del desarrollo', detalle: 'Agiliza la creación de nuevas características al reutilizar elementos previamente construidos.' },
    ],
  },
  problemasSinSistema: {
    titulo: 'Problemas al no usar un Sistema de Diseño',
    puntos: [
      { problema: 'Interfaces inconsistentes', detalle: 'Diseños dispares que confunden al usuario.' },
      { problema: 'Componentes duplicados', detalle: 'Creación repetida de elementos que ya existen en el código.' },
      { problema: 'Deuda técnica visual', detalle: 'Acumulación de estilos y elementos desordenados difíciles de corregir a futuro.' },
      { problema: 'Dificultad para escalar', detalle: 'Complicación para añadir nuevos módulos o pantallas de manera ágil.' },
      { problema: 'Retrabajo constante', detalle: 'Pérdida de tiempo resolviendo problemas de diseño o maquetación repetitivos.' },
    ],
  },
  componentesClave: [
    { nombre: 'Principios de diseño', descripcion: 'Guías fundamentales que orientan la toma de decisiones estéticas y funcionales.' },
    { nombre: 'Paleta de colores', descripcion: 'Definición de los tonos primarios, secundarios y de estado permitidos en la interfaz.' },
    { nombre: 'Tipografía', descripcion: 'Reglas sobre familias tipográficas, tamaños, pesos y jerarquías de texto.' },
    { nombre: 'Espaciados', descripcion: 'Valores estandarizados para márgenes y paddings que generan ritmo visual.' },
    { nombre: 'Componentes UI', descripcion: 'Elementos de interfaz preconstruidos para ensamblar las pantallas.' },
    { nombre: 'Patrones de interacción', descripcion: 'Comportamientos definidos para la respuesta de la interfaz ante acciones del usuario.' },
    { nombre: 'Documentación', descripcion: 'Registro detallado de las reglas, usos y especificaciones de todo el sistema.' },
  ],
  disenoAtomico: {
    concepto: 'Metodología propuesta por Brad Frost que divide las interfaces en niveles jerárquicos para promover la reutilización, la consistencia y facilitar el desarrollo modular.',
    niveles: [
      {
        nivel: 'Átomos',
        descripcion: 'Los elementos más básicos de una interfaz. No poseen funcionalidad completa por sí solos, pero definen la apariencia y el estilo base del sistema. Son altamente reutilizables.',
        ejemplos: ['Input', 'Button', 'Badge', 'Labels'],
      },
      {
        nivel: 'Moléculas',
        descripcion: 'Combinaciones de átomos que cumplen una función simple y específica. Cuentan con un significado funcional claro y se reutilizan en distintas partes.',
        ejemplos: ['Input Group', 'Button Group', 'Breadcrumbs', 'List Group'],
      },
      {
        nivel: 'Organismos',
        descripcion: 'Estructuras complejas compuestas por moléculas y átomos que representan secciones completas de la interfaz. Tienen contexto propio y múltiples responsabilidades.',
        ejemplos: ['Navbar', 'Cards complejas', 'Modal', 'Accordion', 'Tabs / Navs', 'Tables', 'Carousel'],
      },
      {
        nivel: 'Plantillas (Templates)',
        descripcion: 'Estructuras generales que organizan los componentes en un layout o maquetación, aún sin contenido real.',
      },
      {
        nivel: 'Páginas',
        descripcion: 'Instancias finales concretas de las plantillas donde se integra la información y el contenido real del sistema.',
      },
    ],
  },
};
