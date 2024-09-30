import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const intitialState = 0;

// export const counterReducer = createReducer(
//   intitialState,
//   on(increment, (state, action) => state + action.value)
// );

export function counterReducer(state = intitialState, action: any) {
  if (action.type === '[Counter] Increment') {
    state = state + action.value;
  }

  return state;
}
