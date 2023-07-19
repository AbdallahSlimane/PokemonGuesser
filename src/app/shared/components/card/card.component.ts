import {Component, Input, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

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

@NgModule({
  declarations:[CardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardComponent],
})

export class CardModule {}
