/**
 * Interfaz que representa un juego devuelto por la API de FreeToGame.
 */
export interface Game {
  /** Identificador único del juego */
  id: number;

  /** Título principal del juego */
  title: string;

  /** URL de la imagen en miniatura (thumbnail) */
  thumbnail: string;

  /** Descripción corta del juego */
  short_description: string;

  /** URL para acceder u obtener el juego */
  game_url: string;

  /** Género o categoría principal del juego */
  genre: string;

  /** Plataforma soportada (ej. PC (Windows), Web Browser) */
  platform: string;

  /** Editor / Distribuidor del juego */
  publisher: string;

  /** Estudio desarrollador del juego */
  developer: string;

  /** Fecha de lanzamiento del juego en formato AAAA-MM-DD */
  release_date: string;

  /** URL del perfil del juego en el portal FreeToGame */
  freetogame_profile_url: string;
}
