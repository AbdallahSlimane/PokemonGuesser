import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AdminRoutingModule} from "./admin-routing.module";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    ConnexionComponent,
    ListPokemonComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AdminRoutingModule,
    MatOptionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
