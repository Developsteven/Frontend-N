import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
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

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(): void{
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id).subscribe( (usuario) => this.usuario = usuario)
      }
    });
  }

  public create(): void{
    this.usuarioService.create(this.usuario).subscribe(
      usuario => {
        this.router.navigate(['/usuarios'])
        Swal.fire('Nuevo usuario', `Usuario ${usuario.nombre} creado con exito`, 'success')
      }
    )
  }
}
