import { PartialType } from '@nestjs/mapped-types';
import { CreateChargingConnectorDto } from './create-charging-connector.dto';

export class UpdateChargingConnectorDto extends PartialType(CreateChargingConnectorDto) {}
