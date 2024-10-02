import { Module } from '@nestjs/common';
import { ItineraryController } from './itinerary.controller';
import { ItineraryService } from './itinerary.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ITINERARY } from 'src/common/models/models';
import { ItinerarySchema } from './schema/itinerary.schema';

@Module({
  imports:[MongooseModule.forFeatureAsync([
    {
      name:ITINERARY.name,
      useFactory:()=>{
        return ItinerarySchema
      }
    }
  ])],
  controllers: [ItineraryController],
  providers: [ItineraryService]
})
export class ItineraryModule {}
