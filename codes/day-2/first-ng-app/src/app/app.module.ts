import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  //here you register components, directives and pipes
  declarations: [AppComponent, HomeComponent, LoginComponent],
  //you register ONLY services here
  providers: [],
  //you register ONLY modules (built-in angular modules and application feature modules) here
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  //mention which of the registered component(s) should be by default displayed in index.html file body element, when the application runs in the browser
  bootstrap: [
    AppComponent,
    //HomeComponent
  ]
})
export class AppModule {

}