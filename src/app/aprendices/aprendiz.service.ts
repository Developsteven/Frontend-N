import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { APRENDICES } from './aprendices.json';
import { Aprendiz } from './aprendiz';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AprendizService {

  private urlEndpoint: string = 'http://localhost:8089/api/aprendiz';

  constructor(private http: HttpClient, private router: Router) { }

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
    return this.http.get<Aprendiz>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/aprendices']);
          console.error(e.error.mensaje);  //if (e.status != 401 && e.error.mensaje) { }
        Swal.fire('Error al editar', e.error.mensaje, 'error');
          return throwError(e);
      }));
  }

  update(aprendiz: Aprendiz): Observable<Aprendiz>{
    return this.http.put<Aprendiz>(`${this.urlEndpoint}/${aprendiz.id}`, aprendiz, {headers: this.httpHeaders});
  }
}
