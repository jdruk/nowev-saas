import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StationConnectorsService } from './station-connectors.service';
import { CreateStationConnectorDto } from './dto/create-station-connector.dto';
import { UpdateStationConnectorDto } from './dto/update-station-connector.dto';

@Controller('station-connectors')
export class StationConnectorsController {
  constructor(private readonly stationConnectorsService: StationConnectorsService) {}

  @Post()
  create(@Body() createStationConnectorDto: CreateStationConnectorDto) {
    return this.stationConnectorsService.create(createStationConnectorDto);
  }

  @Get()
  findAll() {
    return this.stationConnectorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stationConnectorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStationConnectorDto: UpdateStationConnectorDto) {
    return this.stationConnectorsService.update(+id, updateStationConnectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stationConnectorsService.remove(+id);
  }
}
