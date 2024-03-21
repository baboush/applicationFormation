import { Module } from '@nestjs/common';
import { TaskRepositoriesResolver } from './task-repositories/task-repositories.resolver';

@Module({
  providers: [TaskRepositoriesResolver],
})
export class RepositoriesModule {}
