import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ChargingStationGroup } from '../../charging-station-group/entities/charging-station-group.entity';

@Entity()
export class Saas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  documentId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => User, user => user.saas)
  users: User[];

  @OneToMany(() => ChargingStationGroup, chargeStationGroup => chargeStationGroup.saas)
  chargingStationGroups: ChargingStationGroup[];
}
