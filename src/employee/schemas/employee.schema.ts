import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  email: string;

  @Prop()
  age: number;

  @Prop()
  phone: number;

  @Prop()
  address: string;

  @Prop({
    default: Date.now(),
  })
  date_added: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
