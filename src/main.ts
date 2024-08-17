import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  //quando eu passo isso todas as notations que eu colocar com validações no meu DTO vai ser veridicadas antes das requisições
  await app.listen(3000);
}
bootstrap();
