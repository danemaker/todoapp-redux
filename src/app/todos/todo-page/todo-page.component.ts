import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toogleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  public completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toogleAll() {
    this.completado = !this.completado
    this.store.dispatch(toogleAll({completado: this.completado}));
  }
}
