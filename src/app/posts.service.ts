import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from './post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: any): Observable<IPost>{
    return this.http.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  addNewPost(payload: IPost): Observable<IPost>{
    return this.http.post<IPost>('https://jsonplaceholder.typicode.com/posts/' , payload);
  }
}
