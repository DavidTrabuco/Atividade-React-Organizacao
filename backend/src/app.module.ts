import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ReservasModule } from './reservas/reservas.module';
import { EnderecosModule } from './enderecos/enderecos.module';

@Module({
  imports: [ReservasModule, EnderecosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}