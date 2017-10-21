import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { SearchResult } from './SearchResult';

@Injectable()
export class AppService {
    searchWord(word: string): Promise<SearchResult[]> {
        const tempResults: SearchResult[] = [{title: 'test1', content: 'content1'}, {title: 'test2', content: 'content2'}];
        return Promise.resolve(tempResults);
    }
}