import { CreateAlunoDto } from './dto/create-aluno.dto';
import { AlunosRepository } from './alunos.repository';
export declare class AlunosService {
    private readonly alunosRepository;
    constructor(alunosRepository: AlunosRepository);
    cadastrar(createAlunoDto: CreateAlunoDto): string;
}
