import { Module } from '@nestjs/common';
import { StationConnectorsService } from './station-connectors.service';
import { StationConnectorsController } from './station-connectors.controller';

@Module({
  controllers: [StationConnectorsController],
  providers: [StationConnectorsService],
})
export class StationConnectorsModule {}
