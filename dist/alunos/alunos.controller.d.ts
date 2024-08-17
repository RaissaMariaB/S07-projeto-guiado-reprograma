import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
export declare class AlunosController {
    private readonly alunosService;
    constructor(alunosService: AlunosService);
    cadastrar(createAlunoDto: CreateAlunoDto): string;
}
