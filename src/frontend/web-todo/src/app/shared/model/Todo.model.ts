import { IEntidade } from "./IEntidade.model";

export interface Todo extends IEntidade{
  titulo: string,
  descricao: string,
  dtCadastro: string,
  dtConclusao?: string
}