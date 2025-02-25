import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Task } from '../schemas/task.schema';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) { }

    findAll() {
        return this.taskModel.find();
    }

    async create(task: CreateTaskDto) {
        const newTask = new this.taskModel(task);
        return newTask.save();
    }
    
    async findOne(id: string) {
        return this.taskModel.findById(id).exec();
    }

    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id).exec();
    }
    async update(id: string, task: UpdateTaskDto) {
        return this.taskModel.findByIdAndUpdate(id, task)
    }
}