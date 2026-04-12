import { PartialType } from '@nestjs/swagger';
import { CreateCadastroDto } from './create-cadastro.dto';

export class UpdateCadastroDto extends PartialType(CreateCadastroDto) {}
