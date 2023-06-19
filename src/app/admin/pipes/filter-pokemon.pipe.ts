import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterPokemon'
})
export class FilterPokemonPipe implements PipeTransform {

  transform(items: any[], property: string, term: string): any[] {
    if (!items || !term || !property) {
      return items;
    }
    term = term.toLowerCase();

    if (property == "type") {
      return items.filter(item => item["type1"].toLowerCase().startsWith(term) || item["type2"].toLowerCase().startsWith(term));

    } else {
      return items.filter(item => item[property].toLowerCase().startsWith(term));

    }

  }

}
