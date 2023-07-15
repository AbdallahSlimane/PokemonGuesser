import { Injectable } from '@angular/core';
import { PokemonService } from '../pokemon/pokemon.service';
import { Pokemon } from '../../model/interfaces';
import {PokemonLegendaryStatus} from "../../enum/pokemon-legendary-status.enum";
import {PokemonEvolution} from "../../enum/pokemon-evolution.enum";
import { Clue} from "../../model/clue.class";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuessingGameService {
  pokemon: Pokemon | null = null;
  clues: Clue = new Clue();

  constructor(private pokemonService: PokemonService) { }

  initializeGame() {
    this.pokemonService.getAllPokemon().subscribe(pokemonList => {
      this.pokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
    });
  }

  getPokemonList(): Observable<Pokemon[]> {
    return this.pokemonService.getAllPokemon();
  }

  checkAnswer(answer: string): boolean {
    if (answer !== this.pokemon?.name) {
      this.clues.revealNext();
      return false;
    }
    return true;
  }
}
