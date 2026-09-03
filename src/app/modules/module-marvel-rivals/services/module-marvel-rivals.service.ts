import { Injectable } from '@angular/core';
import { MarvelRivals } from '../interfaces/module-marvel-rivals.interface';
import { Observable, of } from 'rxjs';
import { MARVEL_RIVALS_DATA } from '../../../core/config/marvel-rivals.config';

@Injectable({
  providedIn: 'root',
})
export class ModuleMarvelRivalsService {
  getAllRivals(): Observable<MarvelRivals[]> {
    return of(MARVEL_RIVALS_DATA);
  }
}