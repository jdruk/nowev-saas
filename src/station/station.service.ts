import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Injectable()
export class StationService {
  create(createStationDto: CreateStationDto) {
    return 'This action adds a new Station';
  }

  findAll() {
    return `This action returns all Station`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Station`;
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return `This action updates a #${id} Station`;
  }

  remove(id: number) {
    return `This action removes a #${id} Station`;
  }
}
