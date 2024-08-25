import { Module } from '@nestjs/common';
import { MatriculaRepository } from '../../infrastructure/in-memory/repositories/matricula.repository';
import { InMatriculaRepository } from './repositories/matricula.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: MatriculaRepository,
      useClass: InMatriculaRepository, // É aqui que nós vinculamos uma porta e a um adaptador (a ideia aqui é dizer para o NestJS usar o InMemoryAlunoRepository sempre que alguém pedir por um AlunoRepository - isso facilita muito a troca de adaptadores, vc não precisa mudar nada no resto do código, só aqui).
    },
  ],
  exports: [MatriculaRepository],
})
export class InMemoryAlunoPersistenceModule {}
