import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
