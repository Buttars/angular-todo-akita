import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todos/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  { path: '**', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
