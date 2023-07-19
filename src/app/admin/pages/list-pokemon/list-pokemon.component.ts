import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Pokemon} from "../../../model/interfaces";
import {PokemonService} from "../../../services/pokemon/pokemon.service";
import {Subscription} from "rxjs";
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from "@angular/material/dialog";
import {AddEditPokemonComponent} from "../../components/add-edit-pokemon/add-edit-pokemon.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AdminEnum} from "../../../enum";


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit, OnDestroy {
  private pokemonSubscription!: Subscription;
  public pokemonList!: Pokemon[];
  loading = true;
  p: number = 1;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  term!: string;
  propertyFilterChoice!: string;
  properties: string[] = [
    'name',
    'type'
  ];

  constructor(private pokemonService: PokemonService, private dialog: MatDialog, private matSnackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.getPokemonList();
    this.propertyFilterChoice = "name";
  }

  getPokemonList() {
    this.pokemonSubscription = this.pokemonService.getAllPokemon().subscribe({
      next: (res) => {
        this.pokemonList = res;
        //this.loading = false;
      },
      error: (err) => {
        console.log(err);
        //this.loading = false;
      }
    })
  }

  openAddPokemonForm() {
    const dialogRef = this.dialog.open(AddEditPokemonComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.openSnackBar(AdminEnum.SUCCESSFUL, AdminEnum.POKEMON_ADD);
          this.getPokemonList();
        }
      },
      error: () => {
        this.openSnackBar(AdminEnum.FAILED, AdminEnum.POKEMON_ADD);
      }
    });
  }

  openEditPokemonForm(pokemon: Pokemon) {
    const dialogRef = this.dialog.open(AddEditPokemonComponent, { data: pokemon });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.openSnackBar(AdminEnum.SUCCESSFUL, AdminEnum.POKEMON_UPDATED);
          this.getPokemonList();
        }
      },
      error: () => {
        this.openSnackBar(AdminEnum.FAILED, AdminEnum.POKEMON_UPDATED);
      }
    });

  }

  deletePokemon(id: number) {
    this.pokemonSubscription = this.pokemonService.deletePokemon(id).subscribe({
      next: (res) => {
        if(res) {
          this.openSnackBar(AdminEnum.SUCCESSFUL, AdminEnum.POKEMON_DELETED);
          this.getPokemonList();
        }
      },
      error: () => {
        this.openSnackBar(AdminEnum.SUCCESSFUL, AdminEnum.POKEMON_DELETED);
      }
    })
  }

  openSnackBar(message: string, action: string){
    this.matSnackBar.open(message, action, {
      duration: 1000,
      verticalPosition: "top"
    })
  }

  ngOnDestroy() {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }
}
