import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type userDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  address: string;
  @Prop()
  phone_number: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
