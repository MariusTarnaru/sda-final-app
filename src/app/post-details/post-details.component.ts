import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../posts.service';
import {IPost} from '../post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private route: ActivatedRoute, private service: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.service.getPostById(params.id).subscribe(
        result => {
          console.log(result);
          this.post = result;
        },
        error => {
          console.log(error);
        });
    });
  }

}
