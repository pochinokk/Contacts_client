import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { ContactListComponent } from './app/contact-list/contact-list.component';
import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
