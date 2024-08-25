import { Injectable } from '@nestjs/common';
import { MatriculaEntity } from '../entities/matricula.entity';
import { MatriculaMapper } from '../mappers/matricula.mapper';
import { Matricula } from 'src/matricula/domain/matricula';
import { MatriculaRepository } from 'src/matricula/application/ports/matricula.repository';

@Injectable()
export class InMemoryMatriculaRepository implements MatriculaRepository {
  private readonly matricula = new Map<string, MatriculaEntity>();

  async salvar(matricula: Matricula): Promise<Matricula> {
    const persistenceModel = MatriculaMapper.paraPersistencia(matricula);
    this.matricula.set(persistenceModel.id, persistenceModel);
    const newEntity = this.matricula.get(persistenceModel.id);
    return MatriculaMapper.paraDominio(newEntity);
  }
}

// Esse é o nosso adapter para persitencia em memória
