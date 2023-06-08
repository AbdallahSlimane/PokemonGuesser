import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleComponent } from './components/rule/rule.component';
import { GameComponent } from './components/game/game.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {GameRoutingModule} from "./game-routing.module";

@NgModule({
  declarations: [
    RuleComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    GameRoutingModule
  ]
})
export class GameModule { }
