import { Profile } from 'src/infrastructure/entity/profile-entity';

export class TaskModel {
  id!: number;
  title!: string;
  content!: string;
  profile!: Profile;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
