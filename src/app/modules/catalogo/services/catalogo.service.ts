import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalogo } from '../interfaces/catalogo.interface';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  private readonly apiUrl = 'https://www.freetogame.com/api/games';

  constructor(private http: HttpClient) {}

  getAllGames(): Observable<Catalogo[]> {
    return this.http.get<Catalogo[]>(this.apiUrl);
  }
}
