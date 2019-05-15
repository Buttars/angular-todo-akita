import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list/todo-list.component';

import {
  MatListModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatSelectModule,
} from '@angular/material';
import { TodoComponent } from './todo/todo.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
  ],
  declarations: [TodoListComponent, TodoComponent, FilterComponent],
  exports: [TodoListComponent],
})
export class TodosModule {}
