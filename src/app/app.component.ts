import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokemonService} from "./services/pokemon.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  private pokemonSubscription: Subscription | undefined;
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
       this.getPokemonList();
    }

  getPokemonList() {
    this.pokemonSubscription = this.pokemonService.getPokemonList().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnDestroy() {
    if(this.pokemonSubscription){
      this.pokemonSubscription.unsubscribe();

    }
  }
}
