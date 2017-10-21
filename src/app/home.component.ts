import { Component } from '@angular/core';
import { SearchResult } from './SearchResult';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./app.component.css']
  })
  export class HomeComponent {
    title = 'Search a English Word or Phrase';
    searchWord = '';
    results: SearchResult[] = [];
    search(): void {
        this.results = [{title: 'test1', content: 'content1'}, {title: 'test2', content: 'content2'}];
    }
  }

