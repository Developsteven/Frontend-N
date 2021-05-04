import { Aprendiz } from "../aprendices/aprendiz";
import { TipoNovedad } from "./tipo-novedad";

export class Novedad {

    id: number;
    titulo: string;
    descripcion: string;
    fecha: string;

    aprendiz: Aprendiz;
    tipoNovedad: TipoNovedad;
}
