import { Module } from '@nestjs/common';
import { ChargingStationGroupService } from './charging-station-group.service';
import { ChargingStationGroupController } from './charging-station-group.controller';

@Module({
  controllers: [ChargingStationGroupController],
  providers: [ChargingStationGroupService],
})
export class ChargingStationGroupModule {}
