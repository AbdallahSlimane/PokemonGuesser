import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {
  @Input() width: string = "0"
  @Input() height: string = "0"

}
