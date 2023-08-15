import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestController } from './guest.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Guest, GuestSchema } from './guest.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Guest.name, schema: GuestSchema }]),
  ],
  providers: [GuestService],
  controllers: [GuestController],
})
export class GuestModule {}
