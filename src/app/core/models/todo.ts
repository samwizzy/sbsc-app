export interface Todo {
  readonly id: number;
  userId?: number;
  title: string;
  completed: boolean;
}

export interface TodoItem extends Todo {
  status: boolean;
}
