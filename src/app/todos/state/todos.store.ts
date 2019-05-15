import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Todo } from './todo.model';
import { VISIBILITY_FILTER } from '../filter/filter.model';

export interface State extends EntityState<Todo> { }

const initalState = {
  ui: {
    filter: VISIBILITY_FILTER.SHOW_ALL
  }
};

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<State, Todo> {
  constructor() {
    super(initalState);
  }
}
