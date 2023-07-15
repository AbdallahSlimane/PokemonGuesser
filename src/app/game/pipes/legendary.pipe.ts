import { Pipe, PipeTransform } from '@angular/core';
import {PokemonLegendaryStatus} from "../../enum/pokemon-legendary-status.enum";

@Pipe({
  name: 'legendary'
})
export class LegendaryPipe implements PipeTransform {

  transform(legendary: PokemonLegendaryStatus | undefined): string {
    return this.getLegendaryDisplay(legendary);
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

}
