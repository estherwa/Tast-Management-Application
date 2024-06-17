
import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuidv4(),
      title,
      description,
      isDone: false,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, updateTaskDto: Partial<Task>): Task {
    const task = this.getTaskById(id);
    if (updateTaskDto.title) {
      task.title = updateTaskDto.title;
    }
    if (updateTaskDto.description) {
      task.description = updateTaskDto.description;
    }
    if (updateTaskDto.isDone !== undefined) {
      task.isDone = updateTaskDto.isDone;
    }
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
