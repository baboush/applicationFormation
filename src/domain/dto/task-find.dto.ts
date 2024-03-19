import { Task } from "../models/Task";
import { TaskDto } from "./task.dto";

export class FindTasksDto {
  tasks: TaskDto[];
  constructor(tasks: TaskDto[]) {
    this.tasks = tasks;
  }
}
