import { Injectable } from '@angular/core';

import { ID } from '@datorama/akita';

import { TodosStore } from './todos.store';
import { Todo, createTodo } from './todo.model';
import { VISIBILITY_FILTER } from '../filter/filter.model';

@Injectable({ providedIn: 'root' })
export class TodosService {

  constructor(private todosStore: TodosStore) { }

  updateFilter = (filter: VISIBILITY_FILTER) => {
    this.todosStore.update({
      ui: {
        filter
      }
    });
  }

  add = (title: string) => {
    const todo = createTodo({ title });
    this.todosStore.add(todo);
  }

  delete = ({ id, deleted }: Todo) => { this.todosStore.update(id, { deleted }); };

  complete = ({ id, completed }: Todo) => {
    this.todosStore.update(id, { completed });
  }

}
