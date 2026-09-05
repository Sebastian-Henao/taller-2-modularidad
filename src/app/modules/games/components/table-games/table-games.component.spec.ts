import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Game } from '../../interfaces/game.interface';
import { TableGamesComponent } from './table-games.component';

describe('TableGamesComponent', () => {
  /** Instancia del componente bajo prueba. */
  let component: TableGamesComponent;
  /** Fixture para inspeccionar el DOM renderizado. */
  let fixture: ComponentFixture<TableGamesComponent>;
  /** Juego representativo para validar bindings y enlaces. */
  const game: Game = {
    id: 1,
    title: 'Juego de prueba',
    thumbnail: 'https://example.com/game.jpg',
    short_description: 'Descripción',
    game_url: 'https://example.com/game',
    genre: 'MMORPG',
    platform: 'PC (Windows)',
    publisher: 'Publisher',
    developer: 'Developer',
    release_date: '2024-01-01',
    freetogame_profile_url: 'https://example.com/profile',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableGamesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableGamesComponent);
    component = fixture.componentInstance;
    component.games = [game];
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una fila por cada juego', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.games.length);
  });

  it('debería mostrar los datos principales del juego', () => {
    const row = fixture.debugElement.query(By.css('tbody tr'));
    const text = row.nativeElement.textContent;

    expect(text).toContain(game.title);
    expect(text).toContain(game.genre);
    expect(text).toContain(game.platform);
    expect(text).toContain(game.developer);
    expect(text).toContain(game.publisher);
  });

  it('debería configurar la miniatura y el enlace del juego', () => {
    const image = fixture.debugElement.query(By.css('img')).nativeElement;
    const link = fixture.debugElement.query(By.css('a')).nativeElement;

    expect(image.src).toBe(game.thumbnail);
    expect(image.alt).toBe(`Miniatura de ${game.title}`);
    expect(link.href).toBe(game.game_url);
    expect(link.target).toBe('_blank');
  });

  it('debería usar una imagen de respaldo cuando no hay miniatura', () => {
    expect(component.getThumbnail('')).toContain('data:image/gif;base64');
  });
});