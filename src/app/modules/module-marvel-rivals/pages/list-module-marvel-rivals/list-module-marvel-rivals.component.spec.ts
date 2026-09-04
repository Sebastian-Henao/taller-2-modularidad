import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModuleMarvelRivalsComponent } from './list-module-marvel-rivals.component';
import { throwError } from 'rxjs/internal/observable/throwError';
import { ModuleMarvelRivalsService } from '../../services/module-marvel-rivals.service';
import { TableModuleMarvelRivalsComponent } from '../../components/table-module-marvel-rivals/table-module-marvel-rivals.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { MARVEL_RIVALS_DATA } from '../../../../core/config/marvel-rivals.config';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ListModuleMarvelRivalsComponent', () => {
  let component: ListModuleMarvelRivalsComponent;
  let fixture: ComponentFixture<ListModuleMarvelRivalsComponent>;
  let moduleMarvelRivalsService: ModuleMarvelRivalsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListModuleMarvelRivalsComponent, TableModuleMarvelRivalsComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListModuleMarvelRivalsComponent);
    component = fixture.componentInstance;
    moduleMarvelRivalsService = TestBed.inject(ModuleMarvelRivalsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia llamar a getAllRivals al iniciar', () => {
    const spyGetAllRivals = jest.spyOn(moduleMarvelRivalsService, 'getAllRivals').mockReturnValue(of(MARVEL_RIVALS_DATA));
    fixture.detectChanges();
    expect(spyGetAllRivals).toHaveBeenCalled();
  });

  it('Deberia asignar los personajes de Marvel Rivals recibidos del servicio', () => {
    jest.spyOn(moduleMarvelRivalsService, 'getAllRivals').mockReturnValue(of(MARVEL_RIVALS_DATA));
    fixture.detectChanges();
    expect(component.moduleMarvelRivals).toEqual(MARVEL_RIVALS_DATA);
  });

  it('Deberia pasar los personajes de Marvel Rivals al componente table-module-marvel-rivals', () => {
    jest.spyOn(moduleMarvelRivalsService, 'getAllRivals').mockReturnValue(of(MARVEL_RIVALS_DATA));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableModuleMarvelRivalsComponent))
      .componentInstance;
    expect(tableComponent.moduleMarvelRivals).toEqual(MARVEL_RIVALS_DATA);
  });

  it('debería manejar el error cuando falla getAllRivals', () => {
    component.moduleMarvelRivals = [];
    const errorResponse = new Error('Error al cargar personajes de Marvel Rivals');
  
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(moduleMarvelRivalsService, 'getAllRivals').mockReturnValue(throwError(() => errorResponse));
  
    fixture.detectChanges();
  
    expect(moduleMarvelRivalsService.getAllRivals).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.moduleMarvelRivals.length).toBe(0);
    });
});
