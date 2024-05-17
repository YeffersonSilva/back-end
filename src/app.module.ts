import { Module } from '@nestjs/common';

import { TaksModule } from './task/taks.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';

@Module({
  imports: [TaksModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}
