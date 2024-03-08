import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChargingStationService } from './charging-station.service';
import { CreateChargingStationDto } from './dto/create-charging-station.dto';
import { UpdateChargingStationDto } from './dto/update-charging-station.dto';

@Controller('charging-station')
export class ChargingStationController {
  constructor(private readonly chargingStationService: ChargingStationService) {}

  @Post()
  create(@Body() createChargingStationDto: CreateChargingStationDto) {
    return this.chargingStationService.create(createChargingStationDto);
  }

  @Get()
  findAll() {
    return this.chargingStationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chargingStationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChargingStationDto: UpdateChargingStationDto) {
    return this.chargingStationService.update(+id, updateChargingStationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chargingStationService.remove(+id);
  }
}
