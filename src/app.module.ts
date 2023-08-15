import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GuestModule } from './guests/guest.module';

@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath: '.env',
        isGlobal: true,
      }),
      MongooseModule.forRoot(process.env.DATABASE_URL),
      GuestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
