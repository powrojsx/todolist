import * as types from './todoTypes';
import { createAction } from 'redux-actions';

export const addTodo = createAction(types.ADD_TODO);
export const setFilter = createAction(types.SET_FILTER);
export const toggleTodo = createAction(types.TOGGLE_TODO);
