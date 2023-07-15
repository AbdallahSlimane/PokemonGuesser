import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleComponent } from './pages/rule/rule.component';
import { GuesserComponent } from './pages/guesser/guesser.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {GameRoutingModule} from "./game-routing.module";
import {FormsModule} from "@angular/forms";
import {AnswerDialogComponent} from "./components/answer-dialog/answer-dialog.component";
import {EvolutionPipe} from "./pipes/evolution.pipe";
import { LegendaryPipe } from './pipes/legendary.pipe';

@NgModule({
  declarations: [
    RuleComponent,
    GuesserComponent,
    AnswerDialogComponent,
    EvolutionPipe,
    LegendaryPipe,
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        GameRoutingModule,
        FormsModule,
    ]
})
export class GameModule { }
