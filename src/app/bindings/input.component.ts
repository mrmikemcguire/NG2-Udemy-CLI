import { Component } from '@angular/core';

@Component ({
  selector: 'my-input',
  template: `
    <h1>Your details, please</h1>
    <div>
      <label for='name'>Your Name</label>
      <input type="text" id='name' [(ngModel)]="myself.name"
            (keyup)="onKeyup()">
    </div>
    <div>
      <label for='age'>Your Age</label>
      <input type="text" id='age' [(ngModel)]="myself.age"
            (keyup)="onKeyup()">
    </div>
    <br>
    <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
    <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
    <br>
    <button [disabled]="!isValid">Submit</button>
    `
})

export class InputComponent {
  myself = {name: '', age: ''};
  isFilled = false;
  isValid = false;

  onKeyup() {
    if (this.myself.name != '' && this.myself.age != '')
    {
      this.isFilled = true;
    } else {
      this.isFilled = false;
    }
  }
}

