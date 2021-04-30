import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { footerComponent } from './footer/footer.component';
import { HeaderComponent} from './header/header.component';
import { AprendicesComponent } from './aprendices/aprendices.component';
import { AprendizService } from './aprendices/aprendiz.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule,} from '@angular/common/http';
import { FormComponent } from './aprendices/form.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './usuarios/formulario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



const routes: Routes =[
  {path: '', redirectTo: '/aprendices', pathMatch: 'full'},
  {path: 'novedades', component: AprendicesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'aprendices/form', component: FormComponent},
  {path: 'aprendices/form/:id', component: FormComponent},
  {path: 'usuarios/formulario', component: FormularioComponent},
  {path: 'usuarios/formulario/:id', component: FormularioComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    footerComponent,
    AprendicesComponent,
    FormComponent,
    UsuariosComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AprendizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
