import {
  ConflictException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { CreateMatriculaCommand } from './commands/create-matricula-command';
import { MatriculaRepository } from './ports/matricula.repository';
import { Matricula } from '../domain/matricula';

@Injectable()
export class MatriculaService {
  constructor(
    private readonly matriculaRepository: MatriculaRepository,
  ) {}

  cadastrar(createMatriculaCommand: CreateMatriculaCommand) {
   
    const novaMatricula = new Matricula(
      createMatriculaCommand.id,
      createMatriculaCommand.aluno,
      createMatriculaCommand.curso[],
    );

    return this.matriculaRepository.salvar(novaMatricula);
  }




  listar() {
    return this.matriculaRepository.listar();
  }
}
