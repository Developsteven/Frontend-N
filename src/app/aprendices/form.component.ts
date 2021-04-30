import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Aprendiz } from './aprendiz';
import { AprendizService } from './aprendiz.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public aprendiz: Aprendiz = new Aprendiz();
  public titulo: string = "Crear Cliente";

  constructor(private aprendizService: AprendizService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.caragrAprendiz();
  }

  caragrAprendiz(): void{
    this.activateRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.aprendizService.getAprendiz(id).subscribe( (aprendiz) => this.aprendiz = aprendiz)
      }
    });
  }

  public create(): void{
    this.aprendizService.create(this.aprendiz).subscribe(
      aprendiz => {
        this.router.navigate(['/aprendices'])
        Swal.fire('Nuevo aprendiz',`Aprendiz ${aprendiz.nombre} creado con exito!`, 'success')
      }
    )
  }

  
}
