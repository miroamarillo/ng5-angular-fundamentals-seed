// Import the Component decorator
import { Component } from '@angular/core';


// @ registers the component with Angular
@Component({
  // sets the html element as the selector for Angular
  selector: 'app-root',
  // sets the path to the CSS for the component
  styleUrls: ['app.component.scss'],
  // sets the path to the template to be used by the component
  template: `
    <!-- Another example of Property binding-->
    <img [src]="logo" alt="Ultimate Angular Logo">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div>
            <h1>{{title}}</h1>
            <!-- Property binding example-->
            <h2 [innerHTML]="title"></h2>
          </div>
          <div>
            {{numberOne + numberTwo + 5 }}
          </div>
          <div>
            {{ isHappy ? ':)' : ':(' }}
          </div>
          <div>
          <!-- One way data flow example (property binding with [] notation) -->
            <input type="text" [value]="name">
            <!-- name does not change as I type on the input field -->
            <h3>{{name}}</h3>
          </div>
        </div>
        <div class="col-6">
        <!-- Event binding example. (event binding with () notation) -->
        <div>
          <input
            type="text"
            [value]="name"
            (input)="handleInput($event)"
            (blur)="handleBlur($event)"
          >
          <h3>{{name}}</h3>
        </div>
        <button (click)="handleClick()">Change Name</button>
        <h2>Two way data binding example</h2>
        <!-- compare with the one above.  Notice how we got rid of the value attribute -->
        <!-- we use the ngModel attribute (property binding) and the ngModelChange event listener (event binder)-->
        <div>
          <input
            type="text"
            [ngModel]="nameTwoWay"
            (ngModelChange)="handleChange($event)"
          >
          <h3>{{nameTwoWay}}</h3>
        </div>
        <!-- Property and event binding at the same time. -->
        <!-- Notice the [()] notation -->
        <div>
          <input
            type="text"
            [(ngModel)]="nameTwoWay"
          >
          <h3>{{nameTwoWay}}</h3>
        </div>
        <!-- The above 2 examples work exactly the same-->
        <!-- Template #ref values example-->
        <button (click)="handleClickValue(username.value)">Get Value</button>
        <input type="text" #username>
        </div>
      </div>
    </div>
  `
})

// Component == class name.  Exporting the component so it can be instantiated inside the module
export class AppComponent {
  // Declare properties to be used in the constructor
  title: string;
  isHappy: boolean = true;
  numberOne: number = 1;
  numberTwo: number = 2;
  logo: string ="images/logo.svg"
  name: string ="Julian"
  nameTwoWay: string = "Carlos"

  handleClick(){
    this.name = "Victoria"
  }

  handleInput(event: any){
    this.name = event.target.value;
  }

  handleBlur(event: any){
    this.name = event.target.value;
    console.log(event);
  }
  handleChange(value: string){
    this.nameTwoWay = value;
  }
  handleClickValue(value: string){
    console.log(value)
  }

  constructor(){
    this.title = 'Ultimate Angular';
  }
}
