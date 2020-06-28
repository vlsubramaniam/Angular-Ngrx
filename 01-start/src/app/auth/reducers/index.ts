import { createReducer, on } from "@ngrx/store";

import { AuthActions } from "../auth.action.types";
import { User } from "../model/user.model";

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(AuthActions.logout, (state, action) => {
    return initialState;
  })
);
