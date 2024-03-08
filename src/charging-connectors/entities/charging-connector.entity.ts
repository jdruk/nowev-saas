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
export class ChargingConnector {
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

  @ManyToOne(() => ChargingStation, chargingStation => chargingStation.chargingConnectors)
  @JoinColumn({ name: 'chargingStationId' })
  chargingStation: ChargingStation;
}

