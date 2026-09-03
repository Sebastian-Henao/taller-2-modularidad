import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { Game } from '../../interfaces/game.interface';
import { TableGamesComponent } from '../../components/table-games/table-games.component';
import { GamesService } from '../../services/games.service';
import { ListGamesComponent } from './list-games.component';

describe('ListGamesComponent', () => {
  /** Instancia de la página bajo prueba. */
  let component: ListGamesComponent;
  /** Fixture para inspeccionar la página renderizada. */
  let fixture: ComponentFixture<ListGamesComponent>;
  /** Servicio simulado para evitar peticiones reales. */
  let gamesService: { getAllGames: jest.Mock };
  /** Juego representativo para validar la transferencia a la tabla. */
  const games: Game[] = [];

  beforeEach(async () => {
    gamesService = { getAllGames: jest.fn() };
    await TestBed.configureTestingModule({
      declarations: [ListGamesComponent, TableGamesComponent],
      providers: [{ provide: GamesService, useValue: gamesService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ListGamesComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar y pasar los juegos a la tabla', () => {
    gamesService.getAllGames.mockReturnValue(of(games));
    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(TableGamesComponent))
      .componentInstance as TableGamesComponent;

    expect(gamesService.getAllGames).toHaveBeenCalled();
    expect(component.games).toEqual(games);
    expect(tableComponent.games).toEqual(games);
  });

  it('debería conservar la lista vacía cuando falla la consulta', () => {
    /** Error simulado de la API. */
    const error = new Error('Error al cargar juegos');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    gamesService.getAllGames.mockReturnValue(throwError(() => error));

    fixture.detectChanges();

    expect(console.error).toHaveBeenCalledWith(error);
    expect(component.games).toEqual([]);
  });
});