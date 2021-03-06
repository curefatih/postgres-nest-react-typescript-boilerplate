import * as types from '../actions/todo/types';
import * as fakeTypes from '../fake/fakeTypes';
import { ITodoState, Action } from '../../types';

const initialState: ITodoState = {
  todos: [],
  isLoading: true,
  err: ''
};

export const todoReducer = (
  state = initialState,
  action: Action
): ITodoState => {
  switch (action.type) {
    case types.COMPLETE_TODO:
      return {
        ...state,
        err: ''
      };
    case types.ADD_TODO:
      return {
        ...state,
        err: ''
      };
    case types.DELETE_TODO:
      return {
        ...state,
        err: ''
      };
    case types.GET_ALL_TODO:
      return {
        ...state,
        isLoading: true,
        err: ''
      };
    case types.REQUEST_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: action.payload
      };
    case types.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        isLoading: false
      };
    case types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.payload)],
        isLoading: false
      };
    case types.GET_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        isLoading: false
      };
    case types.COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: [...action.payload]
      };
    case types.RESET:
      return {
        todos: [],
        isLoading: true,
        err: ''
      };
    /**
     *
     * FAKE DATA HANDLER
     *
     */
    case fakeTypes.GET_FAKE_DATA:
      return {
        ...state,
        isLoading: false,
        todos: action.payload
      };
    case fakeTypes.ADD_FAKE_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case fakeTypes.COMPLETE_FAKE_TODO:
      return {
        ...state,
        todos: [...action.payload]
      };
    case fakeTypes.DELETE_FAKE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)]
      };
    default:
      return state;
  }
};
