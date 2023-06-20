import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ScreenComponent} from './components/screen/screen.component';
import { ButtonComponent } from './components/button/button.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { CardComponent } from './components/card/card.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    NavbarComponent,
    ScreenComponent,
    ButtonComponent,
    CardComponent
  ],
  exports: [
    NavbarComponent,
    ScreenComponent,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    ScreenComponent,
    ButtonComponent,
    CardComponent,
    MatDialogModule
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
})
export class SharedModule {
}
