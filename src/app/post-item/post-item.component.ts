import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() postData: IPost;
  constructor() { }

  ngOnInit(): void {
  }

}
