import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Injectable()
export class StationService {
  create(createStationDto: CreateStationDto) {
    return 'This action adds a new chargingStation';
  }

  findAll() {
    return `This action returns all chargingStation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chargingStation`;
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return `This action updates a #${id} chargingStation`;
  }

  remove(id: number) {
    return `This action removes a #${id} chargingStation`;
  }
}
