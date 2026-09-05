import { Catalogo } from '../../interfaces/catalogo.interface';
import { TableCatalogoComponent } from './table-catalogo.component';

/** Pruebas unitarias de la tabla del catálogo. */
describe('TableCatalogoComponent', () => {
  /** Componente bajo prueba. */
  let component: TableCatalogoComponent;

  beforeEach(() => {
    component = new TableCatalogoComponent();
  });

  /** Verifica que la tabla pueda recibir el listado de videojuegos. */
  it('debería crearse y aceptar videojuegos', () => {
    const games: Catalogo[] = [];
    component.games = games;

    expect(component).toBeTruthy();
    expect(component.games).toBe(games);
  });
});