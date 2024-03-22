import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { RepositoriesModule } from '../repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  controllers: [TasksController],
})
export class ControllersModule {}
