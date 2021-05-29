import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Rol } from './rol';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public usuario: Usuario = new Usuario();
  public titulo: string = "Crear Usuario"; 
  public errores: string[];
/*   roles: Rol[]; */


  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuario();
    /* this.usuarioService.getRol().subscribe(roles => this.roles = roles); */
  }

  cargarUsuario(): void{
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario)
      }
    });
  }


  update(): void{
    this.usuarioService.update(this.usuario).subscribe( usuario => {
      this.router.navigate(['/usuarios'])
      Swal.fire('Usuario Actualizado', `Usuario ${usuario.nombre} actualizado con exito!`, 'success')
    },
    (err) => {
      this.errores = err.error.errors as string[];
      console.error('El codigo del error desde el backend: ' + err.status);
      console.error(err.error.errors);
    });
  }
  /* compararRol(o1:Rol, o2:Rol): boolean {
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 ===null || o1 === undefined || o2 ===undefined? false: o1.id===o2.id;
  } */
}
