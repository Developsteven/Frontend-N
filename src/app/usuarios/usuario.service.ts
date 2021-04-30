import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndpoint: string = 'http://localhost:8089/api/usuario';
  constructor(private http: HttpClient) { }

  getUsuarios():Observable<Usuario[]>{
    return this.http.get(this.urlEndpoint).pipe(
      map((response) => response as Usuario[])
    );
  }
}
