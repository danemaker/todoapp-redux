import { Component, OnInit } from '@angular/core';
import { optionFilter, setFilter } from '../../filter/filter.actions';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: optionFilter;
  filters: optionFilter[];
  pendientes: number;
  constructor(private store: Store<AppState>) {
    this.filters = ['todos', 'completados', 'pendientes'];
  }

  ngOnInit(): void {
    this.store
      .subscribe((state) => {
        this.currentFilter = state.filter;
        this.pendientes = state.todos.filter(todo => !todo.completado).length;    
      });
  }

  ChangeFilter(filter: optionFilter) {
    this.store.dispatch(setFilter({filter}));
  }

  borrarCompletados(){
    this.store.dispatch(borrarCompletados());
  }
}
