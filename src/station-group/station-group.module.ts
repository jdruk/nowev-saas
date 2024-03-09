import { Module } from '@nestjs/common';
import { StationGroupService } from './station-group.service';
import { StationGroupController } from './station-group.controller';

@Module({
  controllers: [StationGroupController],
  providers: [StationGroupService],
})
export class StationGroupModule {}
