import { createReducer, on } from '@ngrx/store';
import { login } from '../actions/login.action';

export const initialState = {
  loggedIn: false,
};

const _loginReducer = createReducer(
  initialState,
  on(login, (state) => {
    return { ...state, loggedIn: true };
  })
);

export function loginReducer(state: any, action: any) {
  return _loginReducer(state, action);
}
