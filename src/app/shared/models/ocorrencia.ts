import { Vitima } from './vitima';

export interface Ocorrencia {
    id: number;
    vitima: Vitima;
    dataInicio: Date;
    dataFim: Date;
    finalizada: boolean;
}
