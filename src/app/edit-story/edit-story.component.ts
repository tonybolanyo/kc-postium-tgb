import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  post: Post;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute
      .data
      .subscribe((data: { post: Post }) => {
        this.post = data.post;
        console.log('Cargado post en EditStoryComponent', this.post);
      });
}

  savePost(post: Post): void {
    console.log('aqui debo guardar el post', post);
  }
}
