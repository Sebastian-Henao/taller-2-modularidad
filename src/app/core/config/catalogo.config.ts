/**
 * Configuración central del módulo de catálogo.
 *
 * Define los datos mock que se muestran en la tabla del catálogo.
 */
import { Catalogo } from '../../modules/catalogo/interfaces/catalogo.interface';

/** Videojuegos disponibles para mostrar en el catálogo. */
export const CATALOGO_DATA: Catalogo[] = [
  { id: 1, title: 'Warframe', thumbnail: '', short_description: 'Acción cooperativa de ciencia ficción.', game_url: 'https://www.warframe.com/', genre: 'Shooter', platform: 'PC (Windows)', publisher: 'Digital Extremes', developer: 'Digital Extremes', release_date: '2013-03-25', freetogame_profile_url: '' },
  { id: 2, title: 'Albion Online', thumbnail: '', short_description: 'MMORPG sandbox con economía dirigida por jugadores.', game_url: 'https://albiononline.com/', genre: 'MMORPG', platform: 'PC (Windows)', publisher: 'Sandbox Interactive', developer: 'Sandbox Interactive', release_date: '2017-07-17', freetogame_profile_url: '' },
  { id: 3, title: 'Drakensang Online', thumbnail: '', short_description: 'RPG de acción para jugar desde el navegador.', game_url: 'https://www.drakensang.com/', genre: 'RPG', platform: 'Web Browser', publisher: 'Bigpoint', developer: 'Bigpoint', release_date: '2011-08-08', freetogame_profile_url: '' },
  { id: 4, title: 'League of Angels', thumbnail: '', short_description: 'RPG de estrategia disponible en navegador.', game_url: 'https://www.gtarcade.com/', genre: 'Strategy', platform: 'Web Browser', publisher: 'GTarcade', developer: 'GTarcade', release_date: '2013-12-10', freetogame_profile_url: '' },
  { id: 5, title: 'Path of Exile', thumbnail: '', short_description: 'RPG de acción con profundas opciones de personalización.', game_url: 'https://www.pathofexile.com/', genre: 'ARPG', platform: 'PC (Windows)', publisher: 'Grinding Gear Games', developer: 'Grinding Gear Games', release_date: '2013-10-23', freetogame_profile_url: '' },
  { id: 6, title: 'Forge of Empires', thumbnail: '', short_description: 'Construye y desarrolla una civilización histórica.', game_url: 'https://www.forgeofempires.com/', genre: 'Strategy', platform: 'Web Browser', publisher: 'InnoGames', developer: 'InnoGames', release_date: '2012-04-17', freetogame_profile_url: '' },
];

