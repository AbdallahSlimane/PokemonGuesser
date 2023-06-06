import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ScreenComponent} from './components/screen/screen.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ScreenComponent
  ],
  exports: [
    NavbarComponent,
    ScreenComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    NgOptimizedImage,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule {
}
