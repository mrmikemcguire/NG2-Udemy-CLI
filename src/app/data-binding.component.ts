import { Component } from '@angular/core';
import {PropertyBindingComponent} from './property-binding.component'


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'data-binding.component.html',
  styleUrls: ['data-binding.component.css'],
  template: `
    <section class="parent">
        <h2>This is the parent component</h2>
        <h4>Please enter your name</h4>
        <input type="text" [(ngModel)]="name">
        <br><br>
       
        <section class="child">
            <my-property-binding 
              [myName] = "name"
              [myAge] = "age"
              (hobbiesChanged) = "hobbies = $event">  //$event is NG default
            </my-property-binding>
        </section>
        <p>My hobbies are: {{hobbies}}</p>
    </section>
        `,
  directives: [PropertyBindingComponent]
})
export class MyAppComponent {
  name = '';
  hobbies = '';
}
