import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { APRENDICES } from './aprendices.json';
import { Aprendiz } from './aprendiz';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AprendizService {

  private urlEndpoint: string = 'http://localhost:8089/api/aprendiz';

  constructor(private http: HttpClient) { }

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  getAprendices(): Observable<Aprendiz[]>{
    //return of(APRENDICES);
    return this.http.get(this.urlEndpoint).pipe(
      map( (response) => response as Aprendiz[])
    );
  }

  create(aprendiz: Aprendiz) : Observable<Aprendiz>{
    return this.http.post<Aprendiz>(this.urlEndpoint, aprendiz, {headers: this.httpHeaders});
  }

  getAprendiz(id):Observable<Aprendiz>{
    return this.http.get<Aprendiz>(`${this.urlEndpoint}/${id}`)
  }

  update(aprendiz: Aprendiz): Observable<Aprendiz>{
    return this.http.put<Aprendiz>(`${this.urlEndpoint}/${aprendiz.id}`, aprendiz, {headers: this.httpHeaders});
  }
}
