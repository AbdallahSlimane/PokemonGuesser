import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getPokemonList() {
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemon').pipe(
      map(response => response.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types,
        type1: pokemon.type1,
        type2: pokemon.type2,
        evolutions: pokemon.evolutions,
        legendary: pokemon.legendary,
        attack: pokemon.attack,
      })))
    );
  }
}
