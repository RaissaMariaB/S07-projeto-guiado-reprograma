import { AlunosService } from './alunos.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AlunosController {
    private readonly alunosService;
    constructor(alunosService: AlunosService);
    create(createAlunoDto: CreateAlunoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAlunoDto: UpdateAlunoDto): string;
    remove(id: string): string;
}
