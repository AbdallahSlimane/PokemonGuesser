import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessageInfoService {

  constructor(private messageInfo: MatSnackBar) { }

  openSnackBar(message: string, action: string = 'ok') {
    this.messageInfo.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }
}
