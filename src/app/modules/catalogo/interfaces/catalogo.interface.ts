/** Representa un videojuego recibido desde la API de FreeToGame. */
export interface Catalogo {
	/** Identificador único del videojuego. */
	id: number;
	/** Nombre comercial del videojuego. */
	title: string;
	/** URL de la imagen en miniatura. */
	thumbnail: string;
	/** Descripción corta del videojuego. */
	short_description: string;
	/** URL externa para acceder al videojuego. */
	game_url: string;
	/** Género principal del videojuego. */
	genre: string;
	/** Plataforma o plataformas compatibles. */
	platform: string;
	/** Empresa publicadora del videojuego. */
	publisher: string;
	/** Empresa desarrolladora del videojuego. */
	developer: string;
	/** Fecha de lanzamiento informada por la API. */
	release_date: string;
	/** URL del perfil del videojuego en FreeToGame. */
	freetogame_profile_url: string;
}
