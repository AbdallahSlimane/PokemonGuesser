import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GuessingGameService} from "../../../services/game/guessing-game.service";
import {PokemonLegendaryStatus} from "../../../enum/pokemon-legendary-status.enum";
import {Observable, of} from "rxjs";
import {FormControl} from "@angular/forms";
import {map, switchMap} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {AnswerDialogComponent} from "../../components/answer-dialog/answer-dialog.component";


@Component({
  selector: 'app-guesser',
  templateUrl: './guesser.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./guesser.component.scss']
})
export class GuesserComponent implements OnInit{
  myControls: FormControl[] = [];
  filteredOptions$: Observable<string[]>[] = [];

  inputs: string[] = [
    'First attempt',
    'Second attempt',
    'Third attempt',
    'Fourth attempt',
    'Fifth attempt',
    'Last attempt'
  ];
  inputsVisible: boolean[] = [true, true, true, true, true, true];
  showSuccess: boolean = false;
  answers: string[] = ['', '', '', '', '', ''];
  currentInputIndex: number = 0;

  constructor(public gameService: GuessingGameService, private dialog: MatDialog) {}


  ngOnInit() {
    this.gameService.initializeGame();

    this.inputs.forEach((input, index) => {
      this.myControls[index] = new FormControl('');
      this.filteredOptions$[index] = this.myControls[index].valueChanges.pipe(
        switchMap(value => this._filter(value || ''))
      );
    });
  }

  private _filter(value: string): Observable<string[]> {
    const filterValue = value.toLowerCase();

    if (!filterValue) {
      return of([]);
    }

    return this.gameService.getPokemonList().pipe(
      map(pokemonList => pokemonList
        .map(pokemon => pokemon.name)
        .filter(option => option.toLowerCase().startsWith(filterValue))
      )
    );
  }

  get clues() {
    return this.gameService.clues;
  }

  get pokemon() {
    return this.gameService.pokemon;
  }

  checkAnswer(answer: string, index: number) {
    this.answers[index] = answer;
    if (!this.gameService.checkAnswer(answer)) {
      this.inputsVisible[index] = false;
      if (this.currentInputIndex === index) {
        this.currentInputIndex++;
      }
      if (this.currentInputIndex === this.inputs.length) {
        this.showSuccess = true;
        this.dialog.open(AnswerDialogComponent, {
          data: {name: this.pokemon?.name, id: this.pokemon?.id}
        });
      }
    } else {
      this.showSuccess = true;
      this.dialog.open(AnswerDialogComponent, {
        data: {name: this.pokemon?.name, id: this.pokemon?.id}
      });
    }
  }

}
