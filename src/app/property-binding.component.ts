import { Component, EventEmitter } from '@angular/core';

@Component ({
  selector: 'my-property-binding',
  template: `
    <h2>This is the child component</h2>
    <br>
    <p>Hey, {{name}}, I am {{age}} years old.</p>
    <h4>My hobbies are: </h4>
    <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
      `,
  inputs: ['name:myName', 'age:myAge'] ,  //this are custom properties
                                          //with their aliases
  outputs: ['hobbiesChanged']
})

export class PropertyBindingComponent {
  name = "";
  age = 56;
  hobbiesChanged = new EventEmitter<string>();

  onHobbiesChanged(hobbies : string) {
    this.hobbiesChanged.emit(hobbies);
  }
}
