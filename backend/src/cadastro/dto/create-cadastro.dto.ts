import { ApiProperty } from '@nestjs/swagger';

export class CreateCadastroDto {

    @ApiProperty({ description: 'Nome do cliente', example: 'João Silva' })
    nome: string;

    @ApiProperty({ description: 'Email do cliente', example: 'joao@email.com' })
    email: string;

    @ApiProperty({ description: 'Senha do cliente', example: 'senha123' })
    senha: string;

    @ApiProperty({ description: 'Telefone de contato', example: '11999999999' })
    telefone: string;
}
