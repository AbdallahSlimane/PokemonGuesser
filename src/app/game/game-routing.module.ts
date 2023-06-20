import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RuleComponent} from "./components/rule/rule.component";
import {GuesserComponent} from "./components/guesser/guesser.component";

const routes: Routes = [
  { path: '', component: GuesserComponent},
  { path: 'rule', component: RuleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GameRoutingModule {}
