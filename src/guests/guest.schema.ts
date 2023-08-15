/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'guests' })
export class Guest {
  @Prop({
    unique: true,
    required: true
  })
  guest_guid: string
  
  @Prop({ required: true })
  guest_name: string

  @Prop({ required: true })
  instance: string

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  email: string

  @Prop({ default: Date.now })
  createdAt: Date

  @Prop({ default: Date.now })
  updatedAt: Date
}

export const GuestSchema = SchemaFactory.createForClass(Guest);