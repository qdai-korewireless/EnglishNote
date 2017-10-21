import { Component } from '@angular/core';
import { SearchResult } from './SearchResult';
import { AppService } from './app.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./app.component.css']
  })
  export class HomeComponent {
    title = 'Search a English Word or Phrase!';
    searchWord = '';
    results: SearchResult[] = [];
    search(): void {
        this.service.searchWord(this.searchWord).then(r => this.results = r);
    }
    constructor(private service: AppService) {}
  }

