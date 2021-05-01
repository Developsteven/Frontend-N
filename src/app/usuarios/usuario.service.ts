import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Usuario } from './usuario';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlEndpoint: string = 'http://localhost:8089/api/usuario';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) {}

  getRol():Observable<Rol[]>{
    return this.http.get<Rol[]>(this.urlEndpoint + '/rol');
  }

  getUsuarios(page: number): Observable<any> {
    return this.http
      .get(this.urlEndpoint + '/page/' + page)
      .pipe(
      tap((response: any) => {

        (response.content as Usuario[]).forEach((usuario) => {
          console.log(usuario.nombre);
        })
      }),
      map(response => {
        (response.content as Usuario[]).map((usuario) => {
          usuario.nombre = usuario.nombre.toLowerCase();
          return usuario;
        });
        return response;
      }),
      tap(response => {
        (response.content as Usuario[]).forEach((usuario)  => {
          console.log(usuario.nombre);
        });
      }));
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http
      .post<Usuario>(this.urlEndpoint, usuario).pipe(
        map((response: any) => response.usuario as Usuario),
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

  getUsuario(id): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e => {
        if (e.status != 401 && e.error.mensaje) {
          this.router.navigate(['/usuarios']);
          console.error(e.error.mensaje);
        }
        return throwError(e);
      }));
  }

  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `${this.urlEndpoint}/${usuario.id}`,
      usuario
    ).pipe(
      map((response: any) => response.usuario as Usuario),
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
