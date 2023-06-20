import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleComponent } from './components/rule/rule.component';
import { GuesserComponent } from './components/guesser/guesser.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {GameRoutingModule} from "./game-routing.module";
import {FormsModule} from "@angular/forms";
import {AnswerDialogComponent} from "./components/answer-dialog/answer-dialog.component";

@NgModule({
  declarations: [
    RuleComponent,
    GuesserComponent,
    AnswerDialogComponent
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
