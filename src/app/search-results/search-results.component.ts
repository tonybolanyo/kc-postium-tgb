import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  posts: Post[];
  query: string;

  constructor(
    private _activatedRoute: ActivatedRoute    
  ) { }

  ngOnInit() {
    this._activatedRoute.data.subscribe((data: { posts: Post[] }) => this.posts = data.posts);
    this._activatedRoute.params.subscribe((data: { query: string }) => this.query = data.query);
  }

}
