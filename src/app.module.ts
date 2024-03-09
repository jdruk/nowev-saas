import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { dbDataSource } from './config/data.source';
import { SaasModule } from './saas/saas.module';
import { ChargingStationGroupModule } from './charging-station-group/charging-station-group.module';
import { StationModule } from './station/station.module';
import { StationConnectorsModule } from './station-connectors/station-connectors.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot(dbDataSource),
    UsersModule,
    SaasModule,
    ChargingStationGroupModule,
    StationModule,
    StationConnectorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
