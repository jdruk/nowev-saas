import { Injectable } from '@nestjs/common';
import { CreateChargingStationDto } from './dto/create-charging-station.dto';
import { UpdateChargingStationDto } from './dto/update-charging-station.dto';

@Injectable()
export class ChargingStationService {
  create(createChargingStationDto: CreateChargingStationDto) {
    return 'This action adds a new chargingStation';
  }

  findAll() {
    return `This action returns all chargingStation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chargingStation`;
  }

  update(id: number, updateChargingStationDto: UpdateChargingStationDto) {
    return `This action updates a #${id} chargingStation`;
  }

  remove(id: number) {
    return `This action removes a #${id} chargingStation`;
  }
}
