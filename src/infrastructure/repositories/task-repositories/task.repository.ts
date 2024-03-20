import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskModel } from 'src/domain/interface/task-model/task-model.interface';
import { TaskRepositoryAbstract } from 'src/domain/repositories/task-repository/task-repository.interface';
import { Task } from 'src/infrastructure/entity/task-entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskRepository implements TaskRepositoryAbstract {
  constructor(
    @InjectRepository(Task)
    private readonly taskEntityRepository: Repository<Task>,
  ) {}

  async createTask(task: TaskModel): Promise<void> {
    const taskEntity = this.toTaskEntity(task);
    await this.taskEntityRepository.insert(taskEntity);
  }

  async updateTask(id: number, task: Partial<TaskModel>): Promise<void> {
    await this.taskEntityRepository.update(id, task);
  }

  async deleteTask(id: number): Promise<void> {
    await this.taskEntityRepository.delete(id);
  }

  async findAllTask(): Promise<TaskModel[]> {
    const taskEntity = await this.taskEntityRepository.find();
    return taskEntity.map((taskEntity) => this.toTask(taskEntity));
  }

  async findOneTask(id: number): Promise<TaskModel> {
    const taskEntity = await this.taskEntityRepository.findOne({
      where: { id: id },
    });
    return this.toTask(taskEntity);
  }

  private toTask(taskEntity: Task): TaskModel {
    const task: TaskModel = new TaskModel();
    task.id = taskEntity.id;
    task.title = taskEntity.title;
    task.content = taskEntity.content;
    task.profile = taskEntity.profile;
    task.createdAt = taskEntity.createdAt;
    task.updatedAt = taskEntity.updatedAt;
    return task;
  }

  private toTaskEntity(taskEntity: Task): TaskModel {
    const task: Task = new Task();
    task.id = taskEntity.id;
    task.title = taskEntity.title;
    task.content = taskEntity.content;
    task.profile = taskEntity.profile;
    return task;
  }
}
