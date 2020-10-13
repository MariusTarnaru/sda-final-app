import {Component, OnDestroy, OnInit} from '@angular/core';
import { IPost } from '../post.model';
import { PostsService } from '../posts.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: IPost[];
  post: IPost;
  posts$: Observable<IPost[]> = this.service.getAllPosts();
  sub: Subscription;

  constructor(private service: PostsService) {
  }


  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.sub = this.service.getAllPosts().subscribe(
      (result: IPost[]) => {
        console.log(result);
        this.posts = result;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
  this.sub.unsubscribe();
  }
}
