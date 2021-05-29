import { Rol } from "./rol";

export class Usuario {

    id: number;
    nombre: string;
    apellido: string;
    email: string;
    estado: boolean;
    password:string;

    rol: Rol;
}
