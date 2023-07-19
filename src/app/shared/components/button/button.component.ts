import {Component, Input, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: string = 'primary'
  @Input() width: string = '10';
  @Input() text: string = 'default';
  @Input() type: string = 'button';
}

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [CommonModule, MatButtonModule],
})
export class ButtonModule {}
