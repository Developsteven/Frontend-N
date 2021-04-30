import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class footerComponent {
    public autor: any = {nombre: 'Steven', apellido: 'Perez'};
    public politicas: any ={politi: 'Todos los derechos 2017 SENA -Politicas de privacidad y condiciones de uso Portal Web SENA Politica de tratamiento para Portección Datos Personales Política de seguridad y prívacidad de información.'}
}