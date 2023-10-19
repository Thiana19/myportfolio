import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {
  constructor(private dialog: MatDialog,) {}

  showSuccessPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '1000px',
    });
  }
}
