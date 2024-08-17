import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
export declare class AlunosService {
    create(createAlunoDto: CreateAlunoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAlunoDto: UpdateAlunoDto): string;
    remove(id: number): string;
}
