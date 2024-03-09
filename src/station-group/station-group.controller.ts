import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StationGroupService } from './station-group.service';
import { CreateStationGroupDto } from './dto/create-station-group.dto';
import { UpdateStationGroupDto } from './dto/update-station-group.dto';

@Controller('station-group')
export class StationGroupController {
  constructor(private readonly stationGroupService: StationGroupService) {}

  @Post()
  create(@Body() createStationGroupDto: CreateStationGroupDto) {
    return this.stationGroupService.create(createStationGroupDto);
  }

  @Get()
  findAll() {
    return this.stationGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stationGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStationGroupDto: UpdateStationGroupDto) {
    return this.stationGroupService.update(+id, updateStationGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stationGroupService.remove(+id);
  }
}
