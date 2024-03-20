import { Profile } from 'src/infrastructure/entity/profile-entity';

export interface TaskModel {
  id: number;
  title: string;
  content: string;
  profile: Profile;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
