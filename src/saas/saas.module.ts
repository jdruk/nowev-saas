import { Module } from '@nestjs/common';
import { SaasService } from './saas.service';
import { SaasController } from './saas.controller';
import { SaasRepository } from './saas.repository';

@Module({
  controllers: [SaasController],
  providers: [SaasService, SaasRepository],
})
export class SaasModule {}
