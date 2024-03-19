export class ProfileDto {
  name: string;
  surname: string;
  userId: string;
  tasks: [];

  constructor(name: string, surname: string, userId: string) {
    this.name = name;
    this.surname = surname;
    this.userId = userId;
  }
}
