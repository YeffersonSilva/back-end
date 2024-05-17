import { Schema, Prop } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
class Task {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  title: string;

  @Prop({
    trim: true,
  })
  description: string;

  @Prop({ default: false })
  done: boolean;
}
