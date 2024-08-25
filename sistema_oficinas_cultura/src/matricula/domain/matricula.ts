import { Aluno } from "src/aluno/domain/aluno";

export class Matricula {
  constructor(
    public id: string,
    public aluno: Aluno,
    public curso: string,
  ) {}
}
