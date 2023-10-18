import { Component, Inject } from '@angular/core';
import { SERVICE_TOKEN } from 'src/app/config/constants';
import { Post } from 'src/app/models/post';
import { ServiceContract } from 'src/app/models/service-contract';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  //providers:[PostService]
})
export class PostListComponent {

  //either you initialize this property through field initialization or constructor
  //otherwise, delcare the property in the following manner
  //posts?: Post[];
  posts: Post[];

  //private postSvc: PostService;
  constructor(@Inject(SERVICE_TOKEN) private postSvc: ServiceContract<Post>) {
    //this.postSvc = postSvc
    this.posts = this.postSvc.getAll()
  }
}
