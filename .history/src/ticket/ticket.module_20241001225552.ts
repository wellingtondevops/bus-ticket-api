import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeatureAsync({
    
  })],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
