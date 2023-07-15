import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../../model/interfaces";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService{
  constructor(private http: HttpClient) {
  }

  private types: string[] = [
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water'
  ];

  getAllTypes() {
    return this.types;
  }

  getNumberPokemonList(){
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemon').pipe(
      map(pokemonList => pokemonList.length)
    );
  }

  getAllPokemon() {
    return this.http.get<Pokemon[]>(`http://localhost:3000/pokemon`);
  }

  addPokemon(pokemon: Pokemon) {
    return this.http.post('http://localhost:3000/pokemon', pokemon);
  }

  updatePokemon(pokemon: Pokemon) {
    return this.http.put(`http://localhost:3000/pokemon/${pokemon.id}`, pokemon);
  }

  deletePokemon(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/pokemon/${id}`);
  }

}
