import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Novedad } from './novedad';

@Injectable({
  providedIn: 'root'
})
export class NovedadService {

  private urlEndpoint: string = 'http://localhost:8089/api/novedades';

  constructor(private http: HttpClient) { }

  getNovedad(id:number): Observable<Novedad>{
    return this.http.get<Novedad>(`${this.urlEndpoint}/${id}`);
  }

  create(novedad: Novedad): Observable<Novedad>{
    return this.http.post<Novedad>(this.urlEndpoint, novedad);
  }
}
