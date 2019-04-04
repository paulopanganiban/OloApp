import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';
import { Post } from './post';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-instant-search-github',
  templateUrl: './instant-search-github.component.html',
  styleUrls: ['./instant-search-github.component.css']
})
export class InstantSearchGithubComponent implements OnInit {
  searchTermOLO: string;
  results: any;
  posts: Observable<Post[]>;
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
  }
  getPosts() {
    const params = new HttpParams().set('userId', '1');
    const headers = new HttpHeaders().set('Authorization', 'olo-token');
    this.posts = this.httpClient.get<Post[]>(`${this.ROOT_URL}/posts`, { headers });
  }
  newSearch(termOLO) {
   this.results = this.httpClient.get(
     `https://api.github.com/search/repositories?q=${termOLO}&sort=stars&order=desc`)
     .pipe(
       map(res => res = res)
     );
  }
}
