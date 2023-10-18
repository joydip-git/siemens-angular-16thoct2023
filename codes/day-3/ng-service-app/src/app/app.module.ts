import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from './services/post.service';
import { SERVICE_TOKEN, SERVICE_TYPE } from './config/constants';
import { HttpClientModule } from '@angular/common/http';
import { PostFilterPipe } from './pipes/post-filter.pipe';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostFilterPipe,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
