// import the Module decorator from angular core
import { NgModule } from '@angular/core';
// import browser module because the app is a browser app
// also because the render happens in the browser not in the server
import { BrowserModule } from '@angular/platform-browser';
// import common module. Needed to create directives, etc.
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// import the App Component
import { AppComponent } from './app.component';

@NgModule({
  // Register the Component in the Module
  declarations: [
    AppComponent
  ],
  // import the added Angular modules
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  // tell the Module to bootstrap the component
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}