import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AprendizService } from '../aprendices/aprendiz.service';
import { AuthService } from '../token/auth.service';
import { TokenService } from '../token/token.service';
import { Usuario } from '../usuarios/usuario';
import { UsuarioService } from '../usuarios/usuario.service';
import { Novedad } from './novedad';
import { NovedadService } from './novedad.service';
import { TipoNovedad } from './tipo-novedad';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  title: string = 'Crear Novedad';

  tipoNovedades: TipoNovedad[];
  novedad: Novedad = new Novedad();
  usuario: Usuario;
  nombreUsuario = '';
  isLogged = false; 
  id = '';

  constructor(private aprendizService: AprendizService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private novedadService: NovedadService,
    private usuarioService: UsuarioService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      let aprendizId = +params.get('aprendizId');
      /* let usuarioId = +params.get('usuarioId'); */
      this.aprendizService.getAprendiz(aprendizId).subscribe(aprendiz => this.novedad.aprendiz = aprendiz);
      
    })
    this.novedadService.getTipoNovedad().subscribe(tipoNovedades => this.tipoNovedades = tipoNovedades);
    this.nombreUsuario = this.tokenService.getUserName();
    this.id = this.tokenService.getId();
    
    /* this.tokenService.getIdUsuario().subscribe(aprendiz => this.novedad.usuario = aprendiz); */
  }

  create(novedadForm): void{

    if(novedadForm.form.valid){
      
      this.novedadService.create(this.novedad).subscribe((novedad) => {
        Swal.fire('Novedad Nueva',`Novedad ${novedad.titulo} creada con exito!`, 'success');
        this.router.navigate(['/aprendices']);
      });
    }
  }

  compararTipoNovedad(o1:TipoNovedad, o2:TipoNovedad): boolean {
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 === null || o2 ===null || o1 === undefined || o2 ===undefined? false: o1.id===o2.id;
  }
}
