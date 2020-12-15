import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { optionFilter } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodos',
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filtro: optionFilter): unknown {
    switch (filtro) {
      case 'completados':
        return todos.filter((todo) => todo.completado);

      case 'pendientes':
        return todos.filter((todo) => !todo.completado);

      default:
        return todos;
    }
  }
}
