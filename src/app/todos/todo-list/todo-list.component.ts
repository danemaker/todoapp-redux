import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { optionFilter } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public todos: Todo[];
  currentFilter: optionFilter
  constructor(private store: Store<AppState>) {
    this.store.subscribe(({todos, filter}) => {
      this.todos = todos;
      this.currentFilter = filter;
    });
  }

  ngOnInit(): void {}
}
