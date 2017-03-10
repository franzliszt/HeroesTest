import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero';


@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}

  // A more important difference: we no longer call toPromise. 
  // Instead we return the observable from the http.get, 
  // after chaining it to another RxJS operator, map, 
  // to extract heroes from the response data.
  search(term: string): Observable<Hero[]> {
    return this.http
        .get(`app/heroes/?name=${term}`)
        .map(response => response.json().data as Hero[]);
  }
}