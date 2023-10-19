import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class PostListComponent implements OnInit, OnDestroy {

  //either you initialize this property through field initialization or constructor
  //otherwise, delcare the property in the following manner
  posts?: Post[];
  isRequestComplete = false
  errorMessage = ''
  filterText = ''
  private postSub?: Subscription;
  //posts: Post[];

  //private postSvc: PostService;
  constructor(@Inject(SERVICE_TOKEN) private postSvc: ServiceContract<Post>) {
    console.log("creation...")
    //this.postSvc = postSvc
    // this.posts = this.postSvc.getAll()
  }
  updateFilterText(value: string) {
    this.filterText = value
  }

  updatePostCreator() {
    this.posts?.forEach(
      p => {
        if (p.userId == 1)
          p.userId = 2
      }
    )
    console.log(this.posts)
  }
  ngOnDestroy(): void {
    console.log("destroy...")
    this.postSub?.unsubscribe()
  }
  ngOnInit(): void {
    this.postSub = this.postSvc
      .getAll()
      .subscribe({
        next: (resp) => {
          this.posts = resp
          this.errorMessage = ''
          this.isRequestComplete = true
        },
        error: (err) => {
          this.posts = undefined
          this.errorMessage = err.message
          this.isRequestComplete = true
        }
      })
  }
}
