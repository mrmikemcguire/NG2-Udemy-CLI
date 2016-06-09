import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  template: `
      <div class = 'container'>
        ...
      </div>
      <div class = 'container'>
        ...
      </div>
        `,
})
export class MyAppComponent {
  myself = {name: '', age: ''};
  confirmedMyself = {name: '', age: ''};
}
