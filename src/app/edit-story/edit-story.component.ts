import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  savePost(post: Post): void {
    console.log('aqui debo guardar el post', post);
  }
}
