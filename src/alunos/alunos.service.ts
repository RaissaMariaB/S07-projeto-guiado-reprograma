import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { AlunosRepository } from './alunos.repository';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunosService {
  constructor(private readonly alunosRepository: AlunosRepository){}

  cadastrar(createAlunoDto: CreateAlunoDto) {
    const aluno = new Aluno(createAlunoDto.nome, createAlunoDto.endereco, createAlunoDto.email, createAlunoDto.telefone)

    return 'This action adds a new aluno';
  }

}
