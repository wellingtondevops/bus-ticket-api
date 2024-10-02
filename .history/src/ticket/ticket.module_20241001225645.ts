import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TICKET } from 'src/common/models/models';
import { TicketSchema } from './schema/ticket.schema';

@Module({
  imports: [MongooseModule.forFeatureAsync([
    {
      name: TICKET.name,
      useFactory: () => {
        return TicketSchema
      }
    }
  ])],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule { }
