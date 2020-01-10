import { Endereco } from './endereco';
export interface Vitima {
    nome: string;
    dataNascimento: string;
    identidade: string;
    ufIdentidade: string;
    cpf: string;
    nomeMae: string;
    nomePai: string;
    sexo: string;
    cor: string;
    nacionalidade: string;
    altura: string;
    naturalidade: string;
    estadoCivil: string;
    endereco: Endereco;
    email: string;
    telefone: string;
}
