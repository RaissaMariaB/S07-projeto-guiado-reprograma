import { Matricula } from '../../domain/matricula';

export abstract class MatriculaRepository {
  abstract salvar(matricula: Matricula): Promise<Matricula>;
  abstract listar(): Promise<Matricula[]>;
}

