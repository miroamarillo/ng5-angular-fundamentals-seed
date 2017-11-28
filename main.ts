// This is imported to compile the app in the browser
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
// Import the App module 
import { AppModule } from './app/app.module';
// Teel Angular to bootstrap the App Module
platformBrowserDynamic().bootstrapModule(AppModule);