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
  export class StationGroup {
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
  
    @ManyToOne(() => Saas, (saas) => saas.stationGroups)
    @JoinColumn({ name: 'saasId' })
    saas: Saas;

    @OneToMany(() => Station, station => station.stationGroup)
    stations: Station[];
  }
  
  