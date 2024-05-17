import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Task } from '../schemas/task.schema';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) { }

    findAll() {
        return this.taskModel.find().exec();
    }

    asynccreate(task: Task) {
        const newTask = new this.taskModel(task);
        return newTask.save();
    }
    
    async findOne(id: string) {
        return this.taskModel.findById(id).exec();
    }

    async delete(id: string) {
        return this.taskModel.findByIdAndDelete(id).exec();
    }
    async update(id: string, task: Task) {
        return this.taskModel.findByIdAndUpdate(id, task)
    }
}