import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ReservasModule } from './reservas/reservas.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';

@Module({
  imports: [ReservasModule, EnderecosModule, PedidosModule, CadastroModule, PagamentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}