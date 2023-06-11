import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color:string = 'primary'
  @Input() width: string = '10';
  @Input() text: string = 'default';
  @Input() type: string = 'button';
}
