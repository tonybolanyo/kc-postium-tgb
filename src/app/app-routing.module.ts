import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CategoryResolveService } from './category-resolve.service';
import { NewStoryComponent } from './new-story/new-story.component';
import { PostsResolveService } from './posts-resolve.service';
import { PostDetailsResolveService } from './post-details-resolve.service';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsByCategoryComponent } from './posts-by-category/posts-by-category.component';
import { PostsByAuthorComponent } from './posts-by-author/posts-by-author.component';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: 'posts',
      component: PostsViewComponent,
      resolve: {
        posts: PostsResolveService
      }
    }, {
      path: 'posts/users/:userId',
      component: PostsByAuthorComponent,
      resolve: {
        posts: PostsResolveService
      }
    }, {
      path: 'posts/categories/:categoryId',
      component: PostsByCategoryComponent,
      resolve: {
        posts: PostsResolveService,
        category: CategoryResolveService
      }
    }, {
      path: 'posts/search/:query',
      component: SearchResultsComponent,
      resolve: {
        posts: PostsResolveService
      }
    }, {
      path: 'new-story',
      component: NewStoryComponent
    }, {
      path: 'posts/:postId/edit',
      component: EditStoryComponent,
      resolve: {
        post: PostDetailsResolveService
      }
    }, {
      path: 'posts/:postId',
      component: PostDetailsComponent,
      resolve: {
        post: PostDetailsResolveService
      }
    }, {
      path: '**',
      redirectTo: '/posts'
    }])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
