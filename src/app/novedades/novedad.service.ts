import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Novedad } from './novedad';
import { Observacion } from './observacion';
import { TipoNovedad } from './tipo-novedad';

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

  getTipoNovedad(): Observable<TipoNovedad[]>{
    return this.http.get<TipoNovedad[]>(this.urlEndpoint + '/tipoNovedad');
  }

  createObservacion(observacion: Observacion): Observable<Observacion>{
    return this.http.post<Observacion>(this.urlEndpoint, observacion);
  }

}
