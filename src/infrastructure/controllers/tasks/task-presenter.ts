import { ApiProperty } from '@nestjs/swagger';
import { TaskModel } from 'src/domain/interface/task-model/task-model.interface';
import { Profile } from 'src/infrastructure/entity/profile-entity';

export class TaskPresenter {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  profile: Profile;

  constructor(task: TaskModel) {
    this.id = task.id;
    this.title = task.title;
    this.content = task.content;
    this.profile = task.profile;
  }
}
