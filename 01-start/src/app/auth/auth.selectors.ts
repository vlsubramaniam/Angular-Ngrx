import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

const selectAuthState = createFeatureSelector<AuthState>("auth");

export const isLoggedIn = createSelector(
  // (state) => state["auth"],
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn
);
