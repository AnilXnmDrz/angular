import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //imp for 2 way binding
import {ServerComponent} from './server/server.component'
import { ErrorAlert } from './errorAlert/errorAlert.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ErrorAlert,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
