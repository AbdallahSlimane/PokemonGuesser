import {PokemonLegendaryStatus} from "../enum/pokemon-legendary-status.enum";
import {PokemonEvolution} from "../enum/pokemon-evolution.enum";

export interface Pokemon {
  id: number,
  name: string;
  types?: string[];
  type1: string;
  type2: string;
  evolutions: PokemonEvolution | undefined;
  legendary: PokemonLegendaryStatus | undefined;
  attack: string;
  imageUrl?: string;

  weight?: number;
  height?: number;
}
