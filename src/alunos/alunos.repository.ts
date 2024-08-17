import { Injectable } from "@nestjs/common";
import { Aluno } from "./entities/aluno.entity";

//é o que diz que esse aluno vai ficar disponível e é a classe que sabe como salvar um aluno
@Injectable()
    export class AlunosRepository {
        readonly alunos: Aluno[] = []

        salvar(aluno: Aluno): void{
            this.alunos.push(aluno)
            console.log( `Salvando aluno ${aluno.nome}`);
            
        }
    }