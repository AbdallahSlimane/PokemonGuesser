import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConnexionComponent} from './pages/connexion/connexion.component';
import {RouterModule} from "@angular/router";
import {AdminRoutingModule} from "./admin-routing.module";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
import {ListPokemonComponent} from './pages/list-pokemon/list-pokemon.component';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {AddEditPokemonComponent} from './components/add-edit-pokemon/add-edit-pokemon.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {NgxPaginationModule} from 'ngx-pagination';
import {FilterPokemonPipe} from './pipes/filter-pokemon.pipe';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {ButtonModule} from "../shared/components/button/button.component";
import {CardModule} from "../shared/components/card/card.component";
import {NavBarModule} from "../shared/components/navbar/navbar.component";
import {ScreenModule} from "../shared/components/screen/screen.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    ConnexionComponent,
    ListPokemonComponent,
    AddEditPokemonComponent,
    FilterPokemonPipe
  ],
    imports: [
        CommonModule,
        ButtonModule,
        CardModule,
        NavBarModule,
        ScreenModule,
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
        MatPaginatorModule,
        MatDialogModule,
        MatRadioModule,
        MatDatepickerModule,
        MatSelectModule,
        NgxPaginationModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ]
})
export class AdminModule {
}
