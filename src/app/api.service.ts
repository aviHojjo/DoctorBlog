import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { catchError, map, tap, timestamp } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }
  getLatestData(): Observable<any[]> {

    return this.http.get<any[]>(`http://sundewlabs.com/docplexus/api/`);
    
  }

}
