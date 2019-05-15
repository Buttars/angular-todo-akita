import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

import { TodosService } from '../state/todos.service';
import { TodosQuery } from '../state/todos.query';
import { Todo } from '../state/todo.model';
import { initalFilters, VISIBILITY_FILTER } from '../filter/filter.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  activeFilter$: Observable<VISIBILITY_FILTER>;
  filters = initalFilters;

  control = new FormControl('', [ Validators.required ]);

  constructor(
    private todosQuery: TodosQuery,
    private todosSerivce: TodosService
  ) { }

  ngOnInit() {
    this.todos$ = this.todosQuery.selectVisibleTodos$;
    this.activeFilter$ = this.todosQuery.selectVisibilityFilter$;
  }

  ngOnDestory() { }

  add = () => {
    this.todosSerivce.add(this.control.value);
    this.control.reset();
  }

  delete = id => { this.todosSerivce.delete(id); };

  complete = (todo: Todo) => { this.todosSerivce.complete(todo); };

  changeFilter = (filter: VISIBILITY_FILTER) => {
    this.todosSerivce.updateFilter(filter);
  }

}
