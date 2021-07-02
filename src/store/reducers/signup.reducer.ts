import { createReducer, on } from '@ngrx/store';
import { signup } from '../actions/signup.action';

export const initialState = {
  signedUp: false,
};

const _signupReducer = createReducer(
  initialState,
  on(signup, (state) => {
    return { ...state, signedUp: true };
  })
);

export function signupReducer(state: any, action: any) {
  return _signupReducer(state, action);
}
