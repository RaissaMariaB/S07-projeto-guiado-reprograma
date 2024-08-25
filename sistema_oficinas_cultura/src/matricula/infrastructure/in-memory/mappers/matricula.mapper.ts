import { Matricula } from 'src/matricula/domain/matricula';
import { MatriculaEntity } from '../entities/matricula.entity';

export class MatriculaMapper {
  static paraDominio(matriculaEntity: MatriculaEntity): Matricula {
    const model = new Matricula(
      matriculaEntity.id,
      matriculaEntity.aluno,     
      matriculaEntity.cursos[],
    );
    return model;
  }

  static paraPersistencia(matricula: Matricula) {
    const entity  = new Matricula(
      matricula.id,
      matricula.aluno,     
      matricula.curso[],
    );
    return entity;
  }
}

// Aqui não temos nenhuma dependencia externa, poderíamos extrair esse arquivo para uma pasta compartilhada entre os adaptadores.
// Neste cenário atual não é necessário, mas adaptadores mais sofisticados podem ser diferentes, então é bom manter isso em mente.
// Para evitar problemas vamos manter ele aqui por enquanto (eu darei um desconto pra vcs se justificarem essa repetição de código, fora isso não aceito).
