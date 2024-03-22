import {
  Controller,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Get,
  Query,
} from '@nestjs/common';
import { TaskControllerAbstract } from 'src/domain/controllers/task-controller.interface';
import { TaskRepository } from 'src/infrastructure/repositories/task-repositories/task.repository';
import { CreateTaskDto, UpdateTaskDto } from './task-dto';
import { TaskPresenter } from './task-presenter';
import { ApiResponse, ApiExtraModels } from '@nestjs/swagger';

@Controller('tasks')
@ApiExtraModels(TaskPresenter)
export class TasksController implements TaskControllerAbstract {
  constructor(readonly taskRepository: TaskRepository) {}

  @Post('create')
  async create(@Body() createTaskDto: CreateTaskDto): Promise<void> {
    const { id, title, content, profile } = createTaskDto;
    await this.taskRepository.createTask({ id, title, content, profile });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<void> {
    const { title, content } = updateTaskDto;
    await this.taskRepository.updateTask(id, { title, content });
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.taskRepository.deleteTask(id);
  }

  @ApiResponse({
    status: 200,
    description: 'found all task',
    type: TaskPresenter,
  })
  @Get('tasks')
  async findAll(): Promise<TaskPresenter[]> {
    const tasks = await this.taskRepository.findAllTask();
    return tasks.map((task) => new TaskPresenter({ ...task }));
  }

  @Get('task/:id')
  async findOne(@Query('id') id: number): Promise<TaskPresenter> {
    const { title, content, profile } =
      await this.taskRepository.findOneTask(id);
    return new TaskPresenter({ id, title, content, profile });
  }
}
