import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../interfaces";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(){
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemon').pipe(
      map(response => response.map(pokemon => ({number: pokemon.number, name: pokemon.name})))
    );
  }
}
