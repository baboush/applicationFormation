import { TaskModel } from 'src/domain/interface/task-model/task-model.interface';

export interface TaskRepositoryAbstract {
  createTask(task: TaskModel): Promise<void>;
  findAllTask(): Promise<TaskModel[]>;
  findOneTask(id: number): Promise<TaskModel>;
  deleteTask(id: number): Promise<void>;
  updateTask(id: number, task: Partial<TaskModel>): Promise<void>;
}
