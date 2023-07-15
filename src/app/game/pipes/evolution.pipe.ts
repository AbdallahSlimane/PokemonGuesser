import { Pipe, PipeTransform } from '@angular/core';
import {PokemonEvolution} from "../../enum/pokemon-evolution.enum";

@Pipe({
  name: 'evolution'
})
export class EvolutionPipe implements PipeTransform {

  transform(evolution: PokemonEvolution | undefined): string {
    return this.getEvolutionDisplay(evolution);
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

}
