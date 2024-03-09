import { Injectable } from '@nestjs/common';
import { CreateStationConnectorDto } from './dto/create-station-connector.dto';
import { UpdateStationConnectorDto } from './dto/update-station-connector.dto';

@Injectable()
export class StationConnectorsService {
  create(createStationConnectorDto: CreateStationConnectorDto) {
    return 'This action adds a new chargingConnector';
  }

  findAll() {
    return `This action returns all chargingConnectors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chargingConnector`;
  }

  update(id: number, updateStationConnectorDto: UpdateStationConnectorDto) {
    return `This action updates a #${id} chargingConnector`;
  }

  remove(id: number) {
    return `This action removes a #${id} chargingConnector`;
  }
}
