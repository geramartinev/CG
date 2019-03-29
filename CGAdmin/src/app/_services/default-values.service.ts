import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultValuesService {

  private url = 'https://localhost:44372/api/values';

  constructor(private http: HttpClient) { }

  getValues(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
