import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';

export interface Cadastro {
  id: number;
  nome: string;
  email: string;
  senha: string;
  telefone: string;
}

@Injectable()
export class CadastroService {
  private cadastros: Cadastro[] = [];
  private idCounter = 1;

  create(createCadastroDto: CreateCadastroDto) {
    const emailJaExiste = this.cadastros.find(
      (c) => c.email === createCadastroDto.email,
    );
    if (emailJaExiste) {
      throw new ConflictException('Email já cadastrado');
    }

    const novoCadastro: Cadastro = {
      id: this.idCounter++,
      ...createCadastroDto,
    };

    this.cadastros.push(novoCadastro);

    const { senha, ...resultado } = novoCadastro;
    return resultado;
  }

  findAll() {
    return this.cadastros.map(({ senha, ...c }) => c);
  }

  findOne(id: number) {
    const cadastro = this.cadastros.find((c) => c.id === id);
    if (!cadastro) {
      throw new NotFoundException(`Cadastro #${id} não encontrado`);
    }
    const { senha, ...resultado } = cadastro;
    return resultado;
  }

  update(id: number, updateCadastroDto: UpdateCadastroDto) {
    const index = this.cadastros.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Cadastro #${id} não encontrado`);
    }
    this.cadastros[index] = { ...this.cadastros[index], ...updateCadastroDto };
    const { senha, ...resultado } = this.cadastros[index];
    return resultado;
  }

  remove(id: number) {
    const index = this.cadastros.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new NotFoundException(`Cadastro #${id} não encontrado`);
    }
    const [removido] = this.cadastros.splice(index, 1);
    const { senha, ...resultado } = removido;
    return resultado;
  }
}
