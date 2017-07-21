import { Component, OnInit } from '@angular/core';
import { PostsService } from "./posts.service";
import { Observable } from "rxjs/Observable";

import { Post } from "./post.model";
import { Comment } from "./comment.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Service with RxJs, Observables and AsyncPipe';
  posts:Post[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this.postsService.get().subscribe(posts => {
      this.posts = posts;
      this.assignComments();
    });
  }

  assignComments(){
    this.posts.map(post =>{
      this.postsService.getComments(post).subscribe((comments) => {
        let index = this.posts.findIndex(x => x.id === post.id);
        if(index > -1){
          this.posts[index].comments = comments;
        }
      });
    });
  }
}
