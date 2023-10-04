export default class Todo {
    constructor(
      public id: number,
      public userId: number,
      public title: string,
      public description: string,
      public isCompleted: boolean
    ) {}
  }
  