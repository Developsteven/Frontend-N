import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Cargo } from '../cargo';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  public errores: string[];
  public cargos: Cargo[];

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.getCargo().subscribe(cargo => this.cargos = cargo);
  }


  public create(usuarioForm): void{
    if(usuarioForm.form.valid){
      this.usuarioService.create(this.usuario).subscribe(
        (usuario) => {
          this.router.navigate(['/login'])
          Swal.fire('Nuevo usuario', `Usuario creado con exito!`, 'success') 
    },(err) => {
        Swal.fire('Error', 'Email o Documento ya existe!', 'error');
      }
    )
    }
  }

  /* public create(): void{
    this.usuarioService.create(this.usuario).subscribe(
      (usuario) => {
        this.router.navigate(['/login'])
        Swal.fire('Nuevo usuario', `Usuario creado con exito!`, 'success') 
      },
      (err) => {
        this.errores = err.error.errors as string[];
        console.error('El codigo del error desde el backend: ' + err.status);
        //Swal.fire('Error', 'Email o Documento ya existe!', 'error');
        console.error(err.error.errors);
      }
    )
  } */

  compararCargo(o1:Cargo, o2:Cargo): boolean {
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 ===null || o1 === undefined || o2 ===undefined? false: o1.id===o2.id;
  }
}
