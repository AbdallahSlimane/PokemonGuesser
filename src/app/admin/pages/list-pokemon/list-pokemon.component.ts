import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from "../../../interfaces";
import {PokemonService} from "../../../services/pokemon/pokemon.service";
import {Subscription} from "rxjs";
import { PageEvent } from '@angular/material/paginator';
import {MatDialog} from "@angular/material/dialog";
import {AddEditPokemonComponent} from "../add-edit-pokemon/add-edit-pokemon.component";


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit, OnDestroy {
  private pokemonSubscription: Subscription | undefined;
  public pokemonList: Pokemon[] | undefined;
  public nbPokemon: number | undefined;
  private pageIndex:number = 1;
  private pageSize: number = 10;

  constructor(private pokemonService: PokemonService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getPokemonList(this.pageIndex,this.pageSize);
  }

  getPokemonList(pageIndex: number, pageSize: number) {
    this.pokemonSubscription = this.pokemonService.getPokemonListPaginate(pageIndex,pageSize).subscribe({
      next: (res) => {
        this.pokemonList = res;
        //TODO: this.nbPokemon = this.pokemonService.getPokemonListCount();
        this.nbPokemon = this.pokemonService.getPokemonListCount();

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



  openAddPokemonForm() {
    const dialogRef = this.dialog.open(AddEditPokemonComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPokemonList(this.pageIndex, this.pageSize);
        }
      },
    });
  }

  openEditPokemonForm(id: number) {
    this.pokemonSubscription = this.pokemonService.fetchPokemonById(id).subscribe({
      next: (res) => {
        const dialogRef = this.dialog.open(AddEditPokemonComponent, { data: res });
        dialogRef.afterClosed().subscribe({
          next: (val) => {
            if (val) {
              this.getPokemonList(this.pageIndex, this.pageSize);
            }
          },
        });
      },
      error: () => {
        console.log("Une erreur s'est produite lors de la récupération des informations.");
      }
    });
  }

  deletePokemon(id: number) {

    this.pokemonSubscription = this.pokemonService.deletePokemon(id).subscribe({
      next: (res) => {
        if(res) {
          this.getPokemonList(this.pageIndex, this.pageSize);
        }
      },
      error: (err) => {
        console.log(err);
      }
    })


  }
}
