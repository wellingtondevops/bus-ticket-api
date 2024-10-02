import { Module } from '@nestjs/common';
import { BusmapController } from './busmap.controller';
import { BusmapService } from './busmap.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BUSMAP } from 'src/common/models/models';
import { BusmapSchema } from './schema/busmap.schema';


@Module({
  imports: [MongooseModule.forFeatureAsync([
    {
      name: BUSMAP.name,
      useFactory: () => {
        return BusmapSchema
      }
    }
  ])],
  controllers: [BusmapController],
  providers: [BusmapService]
})
export class BusmapModule { }
