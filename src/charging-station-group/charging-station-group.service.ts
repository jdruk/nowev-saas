import { Injectable } from '@nestjs/common';
import { CreateChargingStationGroupDto } from './dto/create-charging-station-group.dto';
import { UpdateChargingStationGroupDto } from './dto/update-charging-station-group.dto';

@Injectable()
export class ChargingStationGroupService {
  create(createChargingStationGroupDto: CreateChargingStationGroupDto) {
    return 'This action adds a new chargingStationGroup';
  }

  findAll() {
    return `This action returns all chargingStationGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chargingStationGroup`;
  }

  update(id: number, updateChargingStationGroupDto: UpdateChargingStationGroupDto) {
    return `This action updates a #${id} chargingStationGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} chargingStationGroup`;
  }
}
