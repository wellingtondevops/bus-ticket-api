import { Module } from '@nestjs/common';
import { BusmapController } from './busmap.controller';
import { BusmapService } from './busmap.service';

@Module({
  controllers: [BusmapController],
  providers: [BusmapService]
})
export class BusmapModule {}
