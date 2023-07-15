import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-answer-dialog',
  templateUrl: './answer-dialog.component.html',
  styleUrls: ['./answer-dialog.component.scss']
})
export class AnswerDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string, id: number}) {}

  replay() {
    location.reload();
  }
}
