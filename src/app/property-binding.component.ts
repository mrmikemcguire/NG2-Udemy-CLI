import { Component } from '@angular/core';

@Component ({
  selector: 'my-property-binding',
  template: `
    <h2>This is the child component</h2>
    <br>
    <p>Hey, {{name}}, I am {{age}} years old.</p>
      `,
  inputs: ['name:myName', 'age:myAge']   //this are custom properties
                                          //with their aliases
})

export class PropertyBindingComponent {
  name = "";
  age = 56
}
