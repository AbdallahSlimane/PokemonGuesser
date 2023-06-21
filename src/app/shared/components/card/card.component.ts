import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardTitle: string = "title";
  @Input() url: string = "/assets/images/Pikachu-navbar.png";
  @Input() class: string = "";
}
