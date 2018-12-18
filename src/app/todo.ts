export class Todo {
  id: number;
  title: string = "";
  created: date = new Date();
  completed: date = "";
  complete: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
