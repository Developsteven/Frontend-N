import { Usuario } from "../usuarios/usuario";
import { Novedad } from "./novedad";

export class Observacion {
    id: number;
    descripcion: string;
    fecha: string;

    novedad: Novedad;
    usuario: Usuario;
}
