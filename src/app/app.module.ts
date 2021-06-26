import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { InvalidElmFocusDirective } from './invalid-elm-focus.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, RegistrationFormComponent, InvalidElmFocusDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
