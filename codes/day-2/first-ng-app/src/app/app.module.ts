import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  //here you register components, directives and pipes
  declarations: [AppComponent, HomeComponent],
  //you register ONLY services here
  providers: [],
  //you register ONLY modules (built-in angular modules and application feature modules) here
  imports: [BrowserModule],
  //mention which of the registered component(s) should be by default displayed in index.html file body element, when the application runs in the browser
  bootstrap: [
    AppComponent,
    //HomeComponent
  ]
})
export class AppModule {

}