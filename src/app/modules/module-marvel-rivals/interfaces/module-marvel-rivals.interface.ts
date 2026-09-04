/**
 * Interfaz que representa a un personaje de Marvel Rivals.
 *
 * Contiene la información básica necesaria para mostrar cada héroe
 * en la tabla o en cualquier componente de listado del módulo.
 *
 * @remarks
 * Cada personaje debe tener un `id` único, un `nombre`, un `alias`,
 * un `equipo`, una `habilidad` y un `rol` válido dentro de la lista
 * de categorías definidas.
 *
 * @example
 * ```ts
 * const personaje: MarvelRivals = {
 *   id: 1,
 *   nombre: 'Hela',
 *   alias: 'La Muerte',
 *   equipo: 'Los Vengadores',
 *   habilidad: 'Control del dolor',
 *   rol: 'Vanguardia'
 * };
 * ```
 */
export interface MarvelRivals {
    /** Identificador único del personaje */
    id: number;

    /** Nombre completo del personaje */
    nombre: string;

    /** Alias o apodo del personaje */
    alias: string;

    /** Equipo o facción al que pertenece */
    equipo: string;

    /** Habilidad principal del personaje */
    habilidad: string;

    /** Rol asignado del personaje */
    rol: RolCategoria;
}

/**
 * Tipo de rol que puede tener un personaje de Marvel Rivals.
 *
 * @remarks
 * Este tipo restringe los roles a los valores predefinidos del juego:
 * - 'Vanguardia'
 * - 'Duelista'
 * - 'Estratega'
 * - 'Variable'
 *
 * Se utiliza principalmente para mapear los badges de color en la UI.
 *
 * @example
 * ```ts
 * const rol: RolCategoria = 'Duelista';
 * ```
 */
export type RolCategoria = 'Vanguardia' | 'Duelista' | 'Estratega' | 'Variable';