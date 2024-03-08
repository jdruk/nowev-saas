import { PartialType } from '@nestjs/mapped-types';
import { CreateChargingStationGroupDto } from './create-charging-station-group.dto';

export class UpdateChargingStationGroupDto extends PartialType(CreateChargingStationGroupDto) {}
