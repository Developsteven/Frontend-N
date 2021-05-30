import { Rol } from "./rol";

export class Usuario {

    id: number;
    nombre: string;
    apellido: string;
    mail: string;
    estado: boolean;
    password:string;

    roles: string[] = [];
}
