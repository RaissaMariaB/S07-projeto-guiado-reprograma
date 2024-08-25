import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { MatriculaService } from '../../application/matricula.service';
import { CreateMatriculaCommand } from '../../application/commands/create-matricula-command';
import { uuid } from 'uuidv4';

@Controller('matricula')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post()
  cadastrar(@Body() createMatriculaDto: CreateMatriculaDto) {
    return this.matriculaService.cadastrar(
      new CreateMatriculaCommand(
        uuid(),
        createMatriculaDto.aluno,
        [createMatriculaDto.curso],
      ),
    );
  }

  @Get()
  listar() {
    return this.matriculaService.listar();
  }
}
