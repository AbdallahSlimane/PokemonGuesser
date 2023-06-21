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
  evolutionDisplay: string = '';
  legendaryDisplay: string = '';

  constructor(private pokemonService: PokemonService) { }

  initializeGame() {
    this.pokemonService.getAllPokemon().subscribe(pokemonList => {
      this.pokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
      this.evolutionDisplay = this.getEvolutionDisplay(this.pokemon?.evolutions);
      this.legendaryDisplay = this.getLegendaryDisplay(this.pokemon?.legendary);
    });
  }

  getPokemonList(): Observable<Pokemon[]> {
    return this.pokemonService.getAllPokemon();
  }


  getEvolutionDisplay(evolution: PokemonEvolution | undefined): string {
    switch (evolution) {
      case PokemonEvolution.NO_EVOLUTION:
        return 'This pokemon has not yet evolved';
      case PokemonEvolution.FIRST_EVOLUTION:
        return 'First evolution !';
      case PokemonEvolution.SECOND_EVOLUTION:
        return 'Second evolution !!';
      default:
        return 'Unknown, Legendary Pokemon ??';
    }
  }

  getLegendaryDisplay(legendary: PokemonLegendaryStatus | undefined): string {
    switch (legendary) {
      case PokemonLegendaryStatus.LEGENDARY:
        return 'Yes';
      case PokemonLegendaryStatus.NOT_LEGENDARY:
        return 'No';
      default:
        return 'Unknown';
    }
  }

  checkAnswer(answer: string): boolean {
    if (answer !== this.pokemon?.name) {
      this.clues.revealNext();
      return false;
    }
    return true;
  }
}
