import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PokemonService} from "../../../services/pokemon/pokemon.service";
import {Subscription} from "rxjs";
import {Pokemon} from "../../../interfaces";
import {MessageInfoService} from "../../../services/messageInfo/message-info.service";

@Component({
  selector: 'app-add-edit-pokemon',
  templateUrl: './add-edit-pokemon.component.html',
  styleUrls: ['./add-edit-pokemon.component.scss']
})
export class AddEditPokemonComponent implements OnInit, OnDestroy {
  private pokemonSubscription: Subscription | undefined;
  empForm: FormGroup;

  types: string[] = [
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'grass',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water'
  ];

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService,
    private dialogRef: MatDialogRef<AddEditPokemonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pokemon
  ) {
    this.empForm = this.fb.group({
      name: '',
      evolutions: '',
      type1: '',
      type2: '',
      attack: '',
      legendary: '',
      weight: '',
      height: ''
    });
  }

  ngOnDestroy(): void {
    if (this.pokemonSubscription) {
      this.pokemonSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    let pokemon;
    if (!this.empForm.valid) {
      console.log("Erreur");
    } else {
      pokemon = this.createPokemon();
      if (!this.data) {
        this.pokemonSubscription = this.pokemonService.addPokemon(pokemon).subscribe({
          next: (res) => {
            this.dialogRef.close(true);
          },
          error: () => {
            console.log("Une erreur s'est produite lors de la récupération des informations.");
            this.dialogRef.close(true);
          }
        })
      } else {
        pokemon.id = this.data.id;
        this.pokemonSubscription = this.pokemonService.updatePokemon(pokemon).subscribe({
          next: (res) => {
            this.dialogRef.close(true);
          },
          error: () => {
            console.log("Une erreur s'est produite lors de la récupération des informations.");
            this.dialogRef.close(true);
          }
        })
      }
    }
  }

  private createPokemon() {
    const formValue = this.empForm.value;
    const name = formValue["name"];
    const evolutions = formValue["evolutions"];
    const type1 = formValue["type1"];
    const type2 = formValue["type2"];
    const attack = formValue["attack"];
    const legendary = formValue["legendary"];
    const weight = formValue["weight"];
    const height = formValue["height"];

    const pokemon: Pokemon = {
      id: -1, name: name, evolutions: evolutions, type1: type1, type2: type2,
      attack: attack, legendary: legendary, weight: weight, height: height
    };

    return pokemon;

  }
}
