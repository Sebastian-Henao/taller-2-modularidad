/**
 * Configuración central del módulo de catálogo.
 *
 * Define el endpoint de FreeToGame y las opciones de plataforma utilizadas
 * por la página para filtrar los videojuegos mostrados en la tabla.
 */
export const CATALOGO_CONFIG = {
  /** Endpoint público con el listado de videojuegos gratuitos. */
  apiUrl: 'https://www.freetogame.com/api/games',
  /** Opciones de plataforma disponibles en el filtro del catálogo. */
  platforms: [
    { value: 'all', label: 'Todas' },
    { value: 'pc', label: 'PC' },
    { value: 'browser', label: 'Navegador' },
  ],
} as const;
