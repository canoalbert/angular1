import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoApiPOkemon } from "../common/interfaces";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private apiUrl = 'https://api.pokemontcg.io/v2/cards?page=1&pageSize=20';

  constructor(private http: HttpClient) {}

  getPokemonInfo(): Observable<InfoApiPOkemon> {
    return this.http.get<InfoApiPOkemon>(this.apiUrl);
  }
}
