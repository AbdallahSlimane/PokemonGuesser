import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Pokemon} from "../../../interfaces";
import {PokemonService} from "../../../services/pokemon/pokemon.service";
import {Subscription} from "rxjs";
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from "@angular/material/dialog";
import {AddEditPokemonComponent} from "../../components/add-edit-pokemon/add-edit-pokemon.component";


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit, OnDestroy {
  private pokemonSubscription!: Subscription;
  public pokemonList!: Pokemon[];
  p: number = 1;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  term!: string;
  propertyFilterChoice!: string;
  properties: string[] = [
    'name',
    'type'
  ];

  constructor(private pokemonService: PokemonService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getPokemonList();
    this.propertyFilterChoice = "name";
  }

  getPokemonList() {
    this.pokemonSubscription = this.pokemonService.getAllPokemon().subscribe({
      next: (res) => {
        this.pokemonList = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  openAddPokemonForm() {
    const dialogRef = this.dialog.open(AddEditPokemonComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPokemonList();
        }
      },
    });
  }

  openEditPokemonForm(pokemon: Pokemon) {
    const dialogRef = this.dialog.open(AddEditPokemonComponent, { data: pokemon });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPokemonList();
        }
      },
    });

  }

  deletePokemon(id: number) {
    this.pokemonSubscription = this.pokemonService.deletePokemon(id).subscribe({
      next: (res) => {
        if(res) {
          this.getPokemonList();
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }
}
