import { TipoDocumento } from "./tipoDocumento";

export class Aprendiz {

    id: number;
    documento: string;
    nombre: string;
    apellido: string;
    mail: string;
    telefono: string;

    tipoDocumento: TipoDocumento;
}
