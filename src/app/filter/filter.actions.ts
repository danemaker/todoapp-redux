import { createAction, props } from '@ngrx/store';

export type optionFilter = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
    '[Filter] Set Filter',
    props<{filter: optionFilter}>()
    );