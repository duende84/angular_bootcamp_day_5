import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Post } from "./post.model";
import { Comment } from "./comment.model";

@Injectable()
export class PostsService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  get(): Observable<Post[]> {
    return this.http.get(this.url).map((posts: Response) => {
      return posts.json() as Post[];
    });
  }

  getComments(post: Post): Observable<Comment[]> {
    let commentsUrl: string = `${this.url}/${post.id}/comments`;
    return this.http.get(commentsUrl).map((comments: Response) => {
      return comments.json() as Comment[];
    });
  }
}
