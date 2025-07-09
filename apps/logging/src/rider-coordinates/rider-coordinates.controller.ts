import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'Hello from rider coordinates';
  }

  @Post()
  saveRiderCoordinates(
    @Body()
    dto: CreateCoordinatesDTO,
  ) {
    return dto;
  }
}
