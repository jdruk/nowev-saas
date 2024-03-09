import { PartialType } from '@nestjs/mapped-types';
import { CreateStationConnectorDto } from './create-station-connector.dto';

export class UpdateStationConnectorDto extends PartialType(CreateStationConnectorDto) {}
