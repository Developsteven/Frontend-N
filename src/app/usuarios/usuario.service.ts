import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Usuario } from './usuario';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlEndpoint: string = 'http://localhost:8089/api/usuario';

  constructor(private http: HttpClient, private router: Router) {}

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  getUsuarios(): Observable<Usuario[]> {
    return this.http
      .get(this.urlEndpoint)
      .pipe(
      tap(response => {
        let usuarios = response as Usuario[];
        usuarios.forEach(usuario => {
          console.log(usuario.nombre);
        })
      }),
      map(response => {
        let usuarios = response as Usuario[];
        return usuarios.map(usuario => {
          usuario.nombre = usuario.nombre.toLowerCase();
          return usuario;
        });
      }),
      tap(response => {
        (response.forEach(usuario => {
          console.log(usuario.nombre);
        }))
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
