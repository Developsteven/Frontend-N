import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { APRENDICES } from './aprendices.json';
import { Aprendiz } from './aprendiz';
import { catchError, map, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TipoDocumento } from './tipoDocumento';
@Injectable({
  providedIn: 'root'
})
export class AprendizService {

  private urlEndpoint: string = 'http://localhost:8089/api/aprendiz';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private router: Router) { }

 getTipoDocumento(): Observable<TipoDocumento[]>{
  return this.http.get<TipoDocumento[]>(this.urlEndpoint + '/tipoDocumentos');
 }

  getAprendices(): Observable<Aprendiz[]>{
    return this.http.get(this.urlEndpoint).pipe(
      tap(response => {
        let aprendices = response as Aprendiz[];
        aprendices.forEach(aprendiz => {
          console.log(aprendiz.nombre);
        })
      }),
      map(response => {
        let aprendices = response as Aprendiz[];
        return aprendices.map(aprendiz => {
          aprendiz.nombre = aprendiz.nombre.toLowerCase();
          aprendiz.apellido = aprendiz.apellido.toLowerCase();
          return aprendiz;
        });
      }),
      tap(response => {
        (response.forEach(aprendiz => {
          console.log(aprendiz.nombre);
        }))
      }));
  }

  create(aprendiz: Aprendiz) : Observable<Aprendiz>{
    return this.http.post<Aprendiz>(this.urlEndpoint, aprendiz).pipe(
      map((response: any) => response.aprendiz as Aprendiz),
      catchError((e) => {
        if (e.status == 400) {
          return throwError(e);
        }
        if(e.error.mensaje){
        console.error(e.error.mensaje);
      }
        return throwError(e);
      }));
  }

  getAprendiz(id):Observable<Aprendiz>{
    return this.http.get<Aprendiz>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e => {
        if (e.status != 401 && e.error.mensaje) {
          this.router.navigate(['/aprendices']);
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }

  update(aprendiz: Aprendiz): Observable<Aprendiz>{
    return this.http.put<Aprendiz>(`${this.urlEndpoint}/${aprendiz.id}`, aprendiz).pipe(
      map((response: any) => response.aprendiz as Aprendiz),
      catchError((e) => {
        if (e.status == 400) {
          return throwError(e);
        }
        if(e.error.mensaje){
        console.error(e.error.mensaje);
      }
        return throwError(e);
      }));
  }
}
