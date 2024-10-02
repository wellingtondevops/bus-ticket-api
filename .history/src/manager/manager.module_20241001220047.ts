import { Module } from '@nestjs/common';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MANAGER } from 'src/common/models/models';
import { retry } from 'rxjs';
import { ManagerSchema } from './schema/manager.schema';

@Module({
  imports:[MongooseModule.forFeatureAsync([
    {
      name:MANAGER.name,
      useFactory:()=>{
        return ManagerSchema
      }
    }
  ])],
  controllers: [ManagerController],
  providers: [ManagerService]
})
export class ManagerModule {}
