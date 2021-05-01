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

registerLocaleData(LocalES, 'es');

const routes: Routes =[
  {path: '', redirectTo: '/sena', pathMatch: 'full'},
  {path: 'novedades', component: AprendicesComponent},
  {path: 'novedades/page/:page', component: AprendicesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/page/:page', component: UsuariosComponent},
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
    PaginatorComponent,
    PaginadorrComponent,
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
