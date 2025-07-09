import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
class RiderCoordinates {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  lng: number;

  @Prop({ required: true })
  riderId: string;
}

export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinates>;

// Save lat, long, & rider_id
export const RiderCoordinatesSchema =
  SchemaFactory.createForClass(RiderCoordinates);
