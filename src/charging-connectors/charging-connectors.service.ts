import { Injectable } from '@nestjs/common';
import { CreateChargingConnectorDto } from './dto/create-charging-connector.dto';
import { UpdateChargingConnectorDto } from './dto/update-charging-connector.dto';

@Injectable()
export class ChargingConnectorsService {
  create(createChargingConnectorDto: CreateChargingConnectorDto) {
    return 'This action adds a new chargingConnector';
  }

  findAll() {
    return `This action returns all chargingConnectors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chargingConnector`;
  }

  update(id: number, updateChargingConnectorDto: UpdateChargingConnectorDto) {
    return `This action updates a #${id} chargingConnector`;
  }

  remove(id: number) {
    return `This action removes a #${id} chargingConnector`;
  }
}
