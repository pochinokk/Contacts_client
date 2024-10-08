import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ContactListComponent } from './app/contact-list/contact-list.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
