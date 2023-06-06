import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() url: string = "../../../../assets/images/Pikachu-navbar.png"
  @Input() title: string = "POKEMON GUESSER"
  @Input() type: string | null = null

}
