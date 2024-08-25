import { Aluno } from "src/aluno/domain/aluno"

export class CreateMatriculaCommand {
  constructor(
    public readonly id: string,
    public readonly aluno: Aluno,
    public readonly curso: string[],
  ) {}
}
