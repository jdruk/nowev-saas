import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { Saas } from '../../saas/entities/saas.entity';
import { ChargingStation } from '../../charging-station/entities/charging-station.entity';
  
  @Entity()
  export class ChargingStationGroup {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    location: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @Column()
    saasId: number;
  
    @ManyToOne(() => Saas, (saas) => saas.chargingStationGroups)
    @JoinColumn({ name: 'saasId' })
    saas: Saas;

    @OneToMany(() => ChargingStation, chargingStation => chargingStation.chargingStationGroup)
    chargingStations: ChargingStation[];
  }
  
  