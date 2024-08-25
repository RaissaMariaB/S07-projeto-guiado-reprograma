import { Test, TestingModule } from '@nestjs/testing';
import { MatriculaController } from './matricula.controller';
import { MatriculaService } from '../../application/matricula.service';

describe('matriculaController', () => {
  let controller: MatriculaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MatriculaController],
      providers: [MatriculaService],
    }).compile();

    controller = module.get<MatriculaController>(MatriculaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
