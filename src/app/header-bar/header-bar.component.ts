import { Component } from '@angular/core';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {

  constructor(private _router: Router) {}

  runSearch(query: string) {
    this._router.navigate(['posts/search', query]);
  }
}
