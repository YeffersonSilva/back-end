import { Module } from '@nestjs/common';

import { TaksModule } from './task/taks.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TaksModule, MongooseModule.forRoot('mongodb://localhost/taskdb')],
})
export class AppModule {}
