import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AprendizService } from 'src/app/aprendices/aprendiz.service';
import { AuthService } from 'src/app/usuarios/auth.service';
import { Usuario } from 'src/app/usuarios/usuario';
import { UsuarioService } from 'src/app/usuarios/usuario.service';
import Swal from 'sweetalert2';
import { NovedadService } from '../novedad.service';
import { Observacion } from '../observacion';

@Component({
  selector: 'app-observacion',
  templateUrl: './observacion.component.html',
  styleUrls: ['./observacion.component.css']
})
export class ObservacionComponent implements OnInit {

  title: string = 'Agregar Observacion';
  observacion: Observacion = new Observacion();
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService,
    private aprendizService: AprendizService,
    private activateRoute: ActivatedRoute,
    private novedadService: NovedadService,
    private router: Router,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let novedadId = +params.get('novedadId');
      this.novedadService.getNovedad(novedadId).subscribe(novedad => this.observacion.novedad = novedad);
      let username = this.authService.usuario.id;
      this.usuarioService.getUsuario(username).subscribe(usuario => this.observacion.usuario = usuario);
      //console.log(username);
    })
  }

  crearObservacion(observacionForm): void{
    let username = this.authService.usuario.id;

    this.usuarioService.getUsuario(username).subscribe(usuario => this.observacion.usuario = usuario);
    if(observacionForm.form.valid){
      
      this.novedadService.createObservacion(this.observacion).subscribe((novedad) => {
        Swal.fire('Observacion Nueva',`Observacion creada con exito!`, 'success');
        this.router.navigate(['/aprendices']);
      });
    }
  }

}
