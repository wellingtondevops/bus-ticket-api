/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { BusModule } from './bus/bus.module';
import { BusmapModule } from './busmap/busmap.module';
import { ClientModule } from './client/client.module';
import { ItineraryModule } from './itinerary/itinerary.module';
import { ManagerModule } from './manager/manager.module';
import { PassengerModule } from './passenger/passenger.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['env.development'],
    isGlobal: true
  }), MongooseModule.forRoot(process.env.MONGO_URI), BusModule, BusmapModule, ClientModule, ItineraryModule, ManagerModule, PassengerModule, TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
