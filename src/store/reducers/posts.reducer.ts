

import { createReducer, on } from '@ngrx/store';
import { postsAction } from '../actions/posts.action';

export const initialState:any = {
  posts: {},
};

const _postsReducer = createReducer(
  initialState,
  on(postsAction, (state) => {
    return { ...state, posts: state };
  })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
