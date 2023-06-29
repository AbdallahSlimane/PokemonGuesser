import {Component, Input, NgModule} from '@angular/core';
import {Router} from "@angular/router";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() url: string = "../../../../assets/images/Pikachu-navbar.png"
  @Input() title: string = "POKEMON GUESSER"
  @Input() type: string | null = null

  constructor(private router: Router) {
  }
  redirectToAdmin() {
    this.router.navigate(['admin/']).then();
  }

  redirectToGameRule() {
    this.router.navigate(['guesser/rule']).then();
  }
}

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, NgOptimizedImage],
  exports: [NavbarComponent]
})

export class NavBarModule {}
