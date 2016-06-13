import {Component} from '@angular/core';
import {InputComponent} from "./bindings/input.component";
import {ConfirmComponent} from "./bindings/confirm.component";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  template: `
      <div class = 'container'>
        <my-input (submitted)="onSubmit($event)"></my-input>
      </div>
      <div class = 'container'>
        <my-confirm></my-confirm>
      </div>
        `,
  directives: [InputComponent, ConfirmComponent]
})
export class MyAppComponent {
  myself = {name: '', age: ''};
  confirmedMyself = {name: '', age: ''};
  title = 'Happy now?';

  onSubmit(myself: {name: string, age: string}) {
    this.myself = myself;
  }
}
