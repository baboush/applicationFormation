export interface TaskControllerAbstract {
  create(task: unknown): Promise<void>;
  findAll(task: unknown): Promise<unknown[]>;
  findOne(id: number): Promise<unknown>;
  update(id: number, task: unknown): Promise<unknown>;
  delete(id: number): Promise<void>;
}
