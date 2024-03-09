import { Injectable } from '@nestjs/common';
import { CreateStationConnectorDto } from './dto/create-station-connector.dto';
import { UpdateStationConnectorDto } from './dto/update-station-connector.dto';

@Injectable()
export class StationConnectorsService {
  create(createStationConnectorDto: CreateStationConnectorDto) {
    return 'This action adds a new Connector';
  }

  findAll() {
    return `This action returns all Connectors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Connector`;
  }

  update(id: number, updateStationConnectorDto: UpdateStationConnectorDto) {
    return `This action updates a #${id} Connector`;
  }

  remove(id: number) {
    return `This action removes a #${id} Connector`;
  }
}
