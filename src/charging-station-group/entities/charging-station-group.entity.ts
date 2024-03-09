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
import { Station } from '../../station/entities/station.entity';
  
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

    @OneToMany(() => Station, station => station.chargingStationGroup)
    stations: Station[];
  }
  
  