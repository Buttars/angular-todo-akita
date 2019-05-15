import { ID, guid } from '@datorama/akita';

export interface Todo {
  id: ID;
  title: string;
  completed: boolean;
  deleted: boolean;
}

export function createTodo({ title }: Partial<Todo>) {
  return {
    id: guid(),
    title,
    completed: false,
    deleted: false
  } as Todo;
}
