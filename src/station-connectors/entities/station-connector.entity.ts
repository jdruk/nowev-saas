import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Station } from '../../station/entities/station.entity';
  
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
  stationId: number;

  @ManyToOne(() => Station, station => station.stationConnectors)
  @JoinColumn({ name: 'stationId' })
  station: Station;
}

