import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Импортируйте FormsModule
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AppComponent } from './app.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@NgModule({
  imports: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent
  ],
  exports: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent
  ],
  providers: [HttpClient]
})
export class AppModule { }