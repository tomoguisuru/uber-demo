import { Injectable } from '@nestjs/common';
import { CreateCoordinatesDTO } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinates } from './schema/rider-coordinates.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinates.name)
    private readonly model: Model<RiderCoordinates>,
  ) {}
  async saveRiderCoordinates(dto: CreateCoordinatesDTO) {
    return this.model.create(dto);
  }

  async getRiderCoordinates() {
    return this.model.find();
  }
}
