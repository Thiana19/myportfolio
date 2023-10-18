import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
  }
}
