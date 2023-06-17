import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pokemon} from "../../interfaces";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService{
  constructor(private http: HttpClient) {
  }

  getNumberPokemonList(){
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemon').pipe(
      map(pokemonList => pokemonList.length)
    );
  }

  getPokemonByName(name: string){
    const params = new HttpParams().set('name', name);
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemon', {params}).pipe(
      map(pokemonList => pokemonList[0])
    );
  }

  /*getPokemonListPaginate(pageIndex: number, pageSize: number) {
    return this.http.get<Pokemon[]>(`http://localhost:3000/pokemon?_page=` + pageIndex + '&_limit='+ pageSize);
  }*/

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
