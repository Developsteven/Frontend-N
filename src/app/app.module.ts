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
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { ProdGuardService as guard} from './guards/prod-guard.service';



registerLocaleData(LocalES, 'es');

const routes: Routes =[
  {path: '', redirectTo: '/sena', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'aprendices', component: AprendicesComponent, canActivate: [guard], data: {expectedRol:['admin', 'user']}},
  {path: 'aprendices/page/:page', component: AprendicesComponent, canActivate: [guard], data: {expectedRol:['admin', 'user']}},
  {path: 'usuarios', component: UsuariosComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path: 'usuarios/page/:page', component: UsuariosComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path: 'aprendices/form', component: FormComponent, canActivate: [guard], data: {expectedRol:['admin', 'user']}},
  {path: 'aprendices/form/:id', component: FormComponent, canActivate: [guard], data: {expectedRol:['admin', 'user']}},
  {path: 'usuarios/formulario', component: FormularioComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path: 'usuarios/formulario/:id', component: FormularioComponent, canActivate: [guard], data: {expectedRol:['admin']}},
  {path: 'novedades/:id', component: DetalleNovedadComponent, canActivate: [guard], data: {expectedRol:['admin', 'user']}},
  {path: 'novedades/form/:aprendizId', component: NovedadesComponent, canActivate: [guard], data: {expectedRol:['admin', 'user']}},
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
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AprendizService,
    interceptorProvider, 
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
