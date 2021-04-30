import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private urlEndpoint: string = 'http://localhost:8089/api/usuario';

  constructor(private http: HttpClient) {}

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
    return this.http.get<Usuario>(`${this.urlEndpoint}/${id}`)
  }
}
