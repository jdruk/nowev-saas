import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChargingConnectorsService } from './charging-connectors.service';
import { CreateChargingConnectorDto } from './dto/create-charging-connector.dto';
import { UpdateChargingConnectorDto } from './dto/update-charging-connector.dto';

@Controller('charging-connectors')
export class ChargingConnectorsController {
  constructor(private readonly chargingConnectorsService: ChargingConnectorsService) {}

  @Post()
  create(@Body() createChargingConnectorDto: CreateChargingConnectorDto) {
    return this.chargingConnectorsService.create(createChargingConnectorDto);
  }

  @Get()
  findAll() {
    return this.chargingConnectorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chargingConnectorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChargingConnectorDto: UpdateChargingConnectorDto) {
    return this.chargingConnectorsService.update(+id, updateChargingConnectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chargingConnectorsService.remove(+id);
  }
}
