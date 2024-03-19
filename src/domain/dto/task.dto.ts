export class TaskDto {
  title: string;
  content: string;
  profile: any;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
