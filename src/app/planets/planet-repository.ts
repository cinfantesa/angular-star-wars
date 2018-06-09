import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetRepository {

  constructor(private http: HttpClient) { }

  public findAll(page: number = 1, limit: number = 5): Observable<any> {
    const params: HttpParams = new HttpParams()
      .set('_page', `${page}`)
      .set('_limit', `${limit}`);

    return this.http.get(BASE_URL, { params });
  }

  public count(): Observable<number> {
    return this.http.get(BASE_URL)
      .pipe(
        map((planets: any[]) => planets.length)
      );
  }

  public findOne(id: number): Observable<any> {
    const url = `${BASE_URL}/${id}`;

    return this.http.get(url);
  }
}
