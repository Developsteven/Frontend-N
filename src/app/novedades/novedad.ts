import { Aprendiz } from "../aprendices/aprendiz";
import { Usuario } from "../usuarios/usuario";
import { Observacion } from "./observacion";
import { TipoNovedad } from "./tipo-novedad";

export class Novedad {

    id: number;
    titulo: string;
    descripcion: string;
    fecha: string;

    aprendiz: Aprendiz;
    tipoNovedad: TipoNovedad;
    usuario: Usuario;
    observaciones: Observacion[] = [];
}
