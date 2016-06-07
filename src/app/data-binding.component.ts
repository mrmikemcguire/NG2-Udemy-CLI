import { Component } from '@angular/core';
import {PropertyBindingComponent} from './property-binding.component'


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'data-binding.component.html',
  styleUrls: ['data-binding.component.css'],
  template: `
    <my-property-binding></my-property-binding>
        `,
  directives: [PropertyBindingComponent]
})
export class MyAppComponent {
}
