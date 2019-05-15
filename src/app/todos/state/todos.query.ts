import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { combineLatest } from 'rxjs';

import { TodosStore, State } from './todos.store';
import { Todo } from './todo.model';
import { VISIBILITY_FILTER } from '../filter/filter.model';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<State, Todo> {
  todos$ = this.selectAll();

  selectVisibilityFilter$ = this.select(state => state.ui.filter);

  selectVisibleTodos$ = combineLatest(
    this.selectVisibilityFilter$,
    this.selectAll(),
    this.getVisibleTodos
  );

  constructor(protected store: TodosStore) {
    super(store);
  }

  private getVisibleTodos(filter, todos): Todo[] {
    switch (filter) {
      case VISIBILITY_FILTER.SHOW_COMPLETED:
        return todos.filter(t => t.completed && !t.deleted);
      case VISIBILITY_FILTER.SHOW_ACTIVE:
        return todos.filter(t => !t.completed && !t.deleted);
      case VISIBILITY_FILTER.SHOW_DELETED:
        return todos.filter(t => t.deleted);
      default:
        return todos.filter(t => !t.deleted);
    }
  }
}
