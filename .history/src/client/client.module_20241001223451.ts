import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CLIENT } from 'src/common/models/models';
import { ClientSchema } from './schema/client.schema';

@Module({
  imports: [MongooseModule.forFeatureAsync([
    {
      name: CLIENT.name,
      useFactory: () => {
        return ClientSchema
      }
    }
  ])],
  controllers: [ClientController],
  providers: [ClientService]
})
export class ClientModule { }
