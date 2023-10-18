import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from './services/post.service';
import { SERVICE_TOKEN, SERVICE_TYPE } from './config/constants';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //PostService
    {
      provide: SERVICE_TOKEN,
      useClass: SERVICE_TYPE
      // provide: 'SERVICE_TOKEN',
      // useClass: PostService,
      //useValue:new PostService(),
      //useFactory: () => new PostService(),
      //useExisting:new PostService()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
