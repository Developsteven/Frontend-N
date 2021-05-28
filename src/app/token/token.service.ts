import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuario';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';
const ID_KEY = 'AuthNombre';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];
  /* private _usuario: Usuario; */

  constructor() { }

  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public getId(): string {
    return sessionStorage.getItem(ID_KEY);
  }

  /* obtenerDatosToken(token: string): any {
    if (token != null) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  } */

  /* getNombreUsuario(token: string): void {
    let payload = this.obtenerDatosToken(token);
    return  this._usuario.nombre = payload.nombre;
  } */

  /* getIdUsuario(token: string): any {
    let payload = this.obtenerDatosToken(token);
    return  this._usuario.id = payload.id;
  } */

  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

  public getUserName(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  public logOut(): void {
    sessionStorage.clear();
  }
}
