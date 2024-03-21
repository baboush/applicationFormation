import { Observable } from 'rxjs';

export interface TaskControllerAbstract {
  create(task: unknown): Observable<unknown>;
  findAll(task: unknown): Observable<unknown[]>;
  findOne(id: number): Observable<unknown>;
  update(id: number, task: unknown): Observable<unknown>;
  delete(id: number): Observable<void>;
}
