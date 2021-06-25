import { Novedad } from "../novedades/novedad";
import { Ficha } from "./ficha";
import { Programa } from "./programa";
import { TipoDocumento } from "./tipoDocumento";
import { Trimestre } from "./trimestre";

export class Aprendiz {

    id: number;
    documento: string;
    nombre: string;
    apellido: string;
    mail: string;
    telefono: string;

    tipoDocumento: TipoDocumento;
    ficha: Ficha;
    trimestre: Trimestre;
    novedades: Novedad[] = [];
    programa: Programa;
}
