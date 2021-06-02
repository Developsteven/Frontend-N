import { Cargo } from "./cargo";
import { Rol } from "./rol";

export class Usuario {

    id: number;
    numero: string;
    nombre: string;
    apellido: string;
    mail: string;
    estado: boolean;
    password:string;
    cargo: Cargo;
    roles: string[] = [];
}
