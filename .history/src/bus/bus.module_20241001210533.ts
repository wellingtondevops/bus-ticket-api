import { Module } from '@nestjs/common';
import { BusController } from './bus.controller';
import { BusService } from './bus.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BUS } from 'src/common/models/models';
import { BusSchema } from './schema/bus.schema';

@Module({
  imports: [MongooseModule.forFeatureAsync([
    {
      name: BUS.name,
      useFactory: () => {
        return BusSchema
      }
    }
  ])],
  controllers: [BusController],
  providers: [BusService]
})
export class BusModule { }
