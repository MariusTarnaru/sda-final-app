import { Component, OnInit } from '@angular/core';
import {IPost} from '../post.model';
import {PostsService} from '../posts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  post: IPost = {
    id: null,
    userId: null,
    title: null,
    body: null,
  };

  constructor(private  service: PostsService, private router: Router) { }

  onSubmitTemplateBased(form): void {
    console.log(form.value);
    this.service.addNewPost(form.value).subscribe(
      result => {
        alert('Post succesfully added !');
        this.router.navigate(['posts']);
          },
        errorFromPost => {
        console.log(errorFromPost);
          }
    );
  }

  ngOnInit(): void {
  }

}
