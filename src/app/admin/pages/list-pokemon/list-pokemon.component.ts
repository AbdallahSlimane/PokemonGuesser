import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from "../../../interfaces";
import {PokemonService} from "../../../services/pokemon.service";
import {Subscription} from "rxjs";
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit, OnDestroy {
  private pokemonSubscription: Subscription | undefined;
  public pokemonList: Pokemon[] | undefined;

  private pageIndex:number = 1;
  private pageSize: number = 10;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemonList(this.pageIndex,this.pageSize);
  }

  getPokemonList(pageIndex: number, pageSize: number) {
    this.pokemonSubscription = this.pokemonService.getPokemonListPaginate(pageIndex,pageSize).subscribe({
      next: (res) => {
        this.pokemonList = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onPageChange(event: PageEvent): void {
    const pageIndex = event.pageIndex + 1;
    this.getPokemonList(pageIndex,this.pageSize);
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }

}
