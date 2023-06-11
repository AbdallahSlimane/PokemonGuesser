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


@NgModule({
  declarations: [
    NavbarComponent,
    ScreenComponent,
    ButtonComponent
  ],
  exports: [
    NavbarComponent,
    ScreenComponent,
    ButtonComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        NgOptimizedImage,
        MatCardModule,
        MatButtonModule,
        FormsModule,
        MatInputModule,
    ]
})
export class SharedModule {
}
