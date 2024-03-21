import { Module } from '@nestjs/common';
import { TaskRepository } from './task-repositories/task.repository';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm-config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../entity/task-entity';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Task])],
  providers: [TaskRepository],
  exports: [TaskRepository],
})
export class RepositoriesModule {}
