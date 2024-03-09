import { Injectable } from '@nestjs/common';
import { CreateStationGroupDto } from './dto/create-station-group.dto';
import { UpdateStationGroupDto } from './dto/update-station-group.dto';

@Injectable()
export class StationGroupService {
  create(createStationGroupDto: CreateStationGroupDto) {
    return 'This action adds a new StationGroup';
  }

  findAll() {
    return `This action returns all StationGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} StationGroup`;
  }

  update(id: number, updateStationGroupDto: UpdateStationGroupDto) {
    return `This action updates a #${id} StationGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} StationGroup`;
  }
}
