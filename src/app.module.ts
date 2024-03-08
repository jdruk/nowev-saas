import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { dbDataSource } from './config/data.source';
import { SaasModule } from './saas/saas.module';
import { ChargingStationGroupModule } from './charging-station-group/charging-station-group.module';
import { ChargingStationModule } from './charging-station/charging-station.module';
import { ChargingConnectorsModule } from './charging-connectors/charging-connectors.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot(dbDataSource),
    UsersModule,
    SaasModule,
    ChargingStationGroupModule,
    ChargingStationModule,
    ChargingConnectorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
