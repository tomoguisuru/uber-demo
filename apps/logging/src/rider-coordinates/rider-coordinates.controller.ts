import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private riderCoordinatesServices: RiderCoordinatesService) {}

  @Get()
  getRiderCoordinates() {
    return this.riderCoordinatesServices.getRiderCoordinates();
  }

  @Post()
  saveRiderCoordinates(
    @Body()
    dto: CreateCoordinatesDTO,
  ) {
    return this.riderCoordinatesServices.saveRiderCoordinates(dto);
  }
}
