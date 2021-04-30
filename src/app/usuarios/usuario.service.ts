import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Usuario } from './usuario';
import { catchError, map } from 'rxjs/operators';
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
      .pipe(map((response) => response as Usuario[]));
  }

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlEndpoint, usuario, {
      headers: this.httpHeaders,
    });
  }

  getUsuario(id):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/usuarios']);
          console.error(e.error.mensaje);  //if (e.status != 401 && e.error.mensaje) { }
        Swal.fire('Error al editar', e.error.mensaje, 'error');
          return throwError(e);
      }));
  }

  update(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndpoint}/${usuario.id}`, usuario, {
      headers: this.httpHeaders,
    });
  }
}
