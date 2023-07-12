import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './password/password-strength/password-strength.component';
import { PasswordFormExampleComponent } from './password/password-form-example/password-form-example.component';
import { PasswordShowCheckboxComponent } from './password/password-show-checkbox/password-show-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent,
    PasswordFormExampleComponent,
    PasswordShowCheckboxComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
