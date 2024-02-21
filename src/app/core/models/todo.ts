export interface Todo {
  readonly id: number;
  userId?: number;
  title: string;
  completed: boolean;
}

export interface Todo {
  todos: Todo[];
}

export interface TodoItem extends Todo {
  status: boolean;
}
