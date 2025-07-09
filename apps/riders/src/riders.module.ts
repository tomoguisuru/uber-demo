import { Module } from '@nestjs/common';
import { RidersController } from './riders.controller';
import { RidersService } from './riders.service';

@Module({
  imports: [],
  controllers: [RidersController],
  providers: [RidersService],
})
export class RidersModule {}
