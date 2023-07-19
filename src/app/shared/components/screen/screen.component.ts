import {Component, Input, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {
  @Input() width: string = "0"
  @Input() height: string = "0"

}

@NgModule({
  declarations: [ScreenComponent],
  imports: [CommonModule],
  exports: [ScreenComponent]
})

export class ScreenModule {}
