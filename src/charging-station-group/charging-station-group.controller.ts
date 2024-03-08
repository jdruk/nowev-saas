import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChargingStationGroupService } from './charging-station-group.service';
import { CreateChargingStationGroupDto } from './dto/create-charging-station-group.dto';
import { UpdateChargingStationGroupDto } from './dto/update-charging-station-group.dto';

@Controller('charging-station-group')
export class ChargingStationGroupController {
  constructor(private readonly chargingStationGroupService: ChargingStationGroupService) {}

  @Post()
  create(@Body() createChargingStationGroupDto: CreateChargingStationGroupDto) {
    return this.chargingStationGroupService.create(createChargingStationGroupDto);
  }

  @Get()
  findAll() {
    return this.chargingStationGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chargingStationGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChargingStationGroupDto: UpdateChargingStationGroupDto) {
    return this.chargingStationGroupService.update(+id, updateChargingStationGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chargingStationGroupService.remove(+id);
  }
}
