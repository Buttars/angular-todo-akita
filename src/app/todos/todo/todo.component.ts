import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ID } from '@datorama/akita';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { Todo } from '../state/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  @Input() todo: Todo;
  @Output() delete = new EventEmitter<Todo>();
  @Output() complete = new EventEmitter<Todo>();

  control = new FormControl();
  deleteControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.deleteControl = new FormControl(this.todo.deleted);

    this.control.setValue(this.todo.completed);

    this.control.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(completed => {
        this.complete.emit({ ...this.todo, completed });
      });

    this.deleteControl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(deleted => {
        this.delete.emit({ ...this.todo, deleted });
      });
  }

  ngOnDestroy() { }
}
