import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ChargingStation } from '../../charging-station/entities/charging-station.entity';
  
@Entity()
export class StationConnector {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  chargingStationId: number;

  @ManyToOne(() => ChargingStation, chargingStation => chargingStation.stationConnectors)
  @JoinColumn({ name: 'chargingStationId' })
  chargingStation: ChargingStation;
}

