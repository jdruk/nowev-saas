import { Module } from '@nestjs/common';
import { ChargingConnectorsService } from './charging-connectors.service';
import { ChargingConnectorsController } from './charging-connectors.controller';

@Module({
  controllers: [ChargingConnectorsController],
  providers: [ChargingConnectorsService],
})
export class ChargingConnectorsModule {}
