import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {ProfileComponent} from './profile/profile.component';
import {PostsComponent} from './posts/posts.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {AddPostComponent} from './add-post/add-post.component';

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostDetailsComponent},
  {path: 'add-post', component: AddPostComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
