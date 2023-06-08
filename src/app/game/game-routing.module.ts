import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RuleComponent} from "./components/rule/rule.component";
import {GameComponent} from "./components/game/game.component";

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'rule', component: RuleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GameRoutingModule {}
