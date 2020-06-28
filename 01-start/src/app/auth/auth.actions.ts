import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const login = createAction(
  "[LOGIN PAGE] User Login",
  props<{
    user: User;
  }>()
);

export const logout = createAction("[TOP MENU] User logout");
