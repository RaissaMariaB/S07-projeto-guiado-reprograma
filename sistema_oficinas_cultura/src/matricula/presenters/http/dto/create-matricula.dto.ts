import {
  IsString,
} from 'class-validator';
import { Aluno } from 'src/aluno/domain/aluno';

export class CreateMatriculaDto {
  @IsString()
  aluno: Aluno;

  @IsString()
  curso: string;

}
