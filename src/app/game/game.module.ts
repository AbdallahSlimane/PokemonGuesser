import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleComponent } from './pages/rule/rule.component';
import { GuesserComponent } from './pages/guesser/guesser.component';
import {RouterModule} from "@angular/router";
import {GameRoutingModule} from "./game-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AnswerDialogComponent} from "./components/answer-dialog/answer-dialog.component";
import {ButtonModule} from "../shared/components/button/button.component";
import {CardModule} from "../shared/components/card/card.component";
import {NavBarModule} from "../shared/components/navbar/navbar.component";
import {ScreenModule} from "../shared/components/screen/screen.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    RuleComponent,
    GuesserComponent,
    AnswerDialogComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        CardModule,
        NavBarModule,
        ScreenModule,
        RouterModule,
        GameRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class GameModule { }
