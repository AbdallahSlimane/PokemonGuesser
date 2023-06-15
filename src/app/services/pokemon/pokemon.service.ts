import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../../interfaces";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonListCount$: number | undefined;
  constructor(private http: HttpClient) {
    this.getNumberPokemonList();
  }

  getNumberPokemonList(){
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemon').pipe(
      map(pokemonList => pokemonList.length)
    ).subscribe(pokemonList => {
      this.pokemonListCount$ = pokemonList;
    });
  }

  getPokemonListPaginate(pageIndex: number, pageSize: number) {
    return this.http.get<Pokemon[]>(`http://localhost:3000/pokemon?_page=` + pageIndex
      + '&_limit='+ pageSize).pipe(
      map(response => response.map(pokemon => ({id: pokemon.id, name: pokemon.name})))
    );
  }

  fetchPokemonById(id: number) {
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemon?id=' + id).pipe(
      map((pokemon) => pokemon[0])
    );
  }

  addPokemon(pokemon: Pokemon) {
    if (this.pokemonListCount$ != null) {
      pokemon.id = this.pokemonListCount$ + 1;
    }
    return this.http.post('http://localhost:3000/pokemon', pokemon);
  }

  updatePokemon(pokemon: Pokemon) {
    return this.http.put(`http://localhost:3000/pokemon/${pokemon.id}`, pokemon);
  }

  getPokemonListCount(): number {
    return <number>this.pokemonListCount$;
  }

  deletePokemon(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/pokemon/${id}`);
  }

}
