import { ApiProperty } from '@nestjs/swagger';
import { Profile } from 'src/infrastructure/entity/profile-entity';

export class CreateTaskDto {
  @ApiProperty()
  readonly title: string;

  @ApiProperty()
  readonly content: string;

  @ApiProperty()
  readonly profile: Profile;
}

export class UpdateTaskDto {
  @ApiProperty()
  title?: string;

  @ApiProperty()
  content?: string;
}
