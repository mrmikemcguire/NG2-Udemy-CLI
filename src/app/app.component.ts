import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  template: `
      This somehow works!
        `,
})
export class MyAppComponent {
  title = "OK";
}
