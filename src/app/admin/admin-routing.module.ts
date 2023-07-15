import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionComponent} from "./pages/connexion/connexion.component";
import {ListPokemonComponent} from "./pages/list-pokemon/list-pokemon.component";

const routes: Routes = [
  { path: '',  component: ConnexionComponent},
  { path: 'list',  component: ListPokemonComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
