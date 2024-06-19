import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async getAllTasks(): Promise<Task[]> {
    return await this.tasksRepository.find();
  }

  async getTaskById(id: number): Promise<Task> {
    return await this.tasksRepository.findOneBy(id);
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.tasksRepository.create(createTaskDto);
    return await this.tasksRepository.save(task);
  }

  async updateTask(id: number, updateData: Partial<Task>): Promise<Task> {
    await this.tasksRepository.update(id, updateData);
    return this.getTaskById(id);
  }

  async deleteTask(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
