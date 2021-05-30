import { LOCALE_ID, NgModule } from '@angular/core';
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
import { registerLocaleData } from '@angular/common';
import LocalES from '@angular/common/locales/es';
import { PaginatorComponent } from './paginator/paginator.component';
import { PaginadorrComponent } from './paginator/paginadorr.component';
import { DetalleComponent } from './aprendices/detalle/detalle.component';
import { DetalleUserComponent } from './usuarios/detalleUser/detalleUser.component';
import { DetalleNovedadComponent } from './novedades/detalle-novedad.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { LoginComponent } from './usuarios/login/login.component';
import { AuthGuard } from './usuarios/guards/auth.guard';




registerLocaleData(LocalES, 'es');

const routes: Routes =[
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'aprendices', component: AprendicesComponent, canActivate:[AuthGuard]},
  {path: 'aprendices/page/:page', component: AprendicesComponent, canActivate:[AuthGuard]},
  {path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuard]},
  {path: 'usuarios/page/:page', component: UsuariosComponent, canActivate:[AuthGuard]},
  {path: 'aprendices/form', component: FormComponent, canActivate:[AuthGuard]},
  {path: 'aprendices/form/:id', component: FormComponent, canActivate:[AuthGuard]},
  {path: 'usuarios/formulario', component: FormularioComponent, canActivate:[AuthGuard]},
  {path: 'usuarios/formulario/:id', component: FormularioComponent, canActivate:[AuthGuard]},
  {path: 'novedades/:id', component: DetalleNovedadComponent, canActivate:[AuthGuard]},
  {path: 'novedades/form/:aprendizId', component: NovedadesComponent, canActivate:[AuthGuard]},
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
    PaginatorComponent,
    PaginadorrComponent,
    DetalleComponent,
    DetalleUserComponent,
    DetalleNovedadComponent,
    NovedadesComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AprendizService,
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
