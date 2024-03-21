import {
  Controller,
  Inject,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Get,
  Query,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TaskControllerAbstract } from 'src/domain/controllers/task-controller.interface';
import { TaskModel } from 'src/domain/interface/task-model/task-model.interface';
import { TaskRepository } from 'src/infrastructure/repositories/task-repositories/task.repository';
import { CreateTaskDto, UpdateTaskDto } from './task-dto';
import { TaskPresenter } from './task-presenter';

@Controller('tasks')
export class TasksController implements TaskControllerAbstract {
  constructor(
    @Inject(TaskRepository) readonly taskRepository: TaskRepository,
  ) {}

  @Post('create')
  async create(
    @Body() createTaskDto: CreateTaskDto,
  ): Observable<CreateTaskDto> {
    const { title, content, profile } = createTaskDto;
    await this.taskRepository.createTask({ title, content, profile });
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    const { title, content } = updateTaskDto;
    await this.taskRepository.updateTask(id, { title, content });
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Observable<void> {
    await this.taskRepository.deleteTask(id);
  }

  @Get('tasks')
  async findAll(): Observable<TaskPresenter> {
    const tasks = this.taskRepository.findAllTask();
    return tasks;
  }

  @Get('task')
  findOne(@Query('id') id: number): Observable<TaskPresenter> {
    const { title, content, profile } = this.taskRepository.findOneTask(id);

    return new TaskPresenter({
      id,
      title,
      content,
      profile,
    });
  }
}
