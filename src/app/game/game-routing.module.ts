import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RuleComponent} from "./pages/rule/rule.component";
import {GuesserComponent} from "./pages/guesser/guesser.component";

const routes: Routes = [
  { path: '', component: GuesserComponent},
  { path: 'rule', component: RuleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GameRoutingModule {}
