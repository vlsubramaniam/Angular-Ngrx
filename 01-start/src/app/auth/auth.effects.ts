import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthActions } from "./auth.action.types";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  constructor(private action$: Actions, private router: Router) {
    // const login$ = this.action$.pipe(
    //   ofType(AuthActions.login),
    //   tap((action) => localStorage.setItem("user", JSON.stringify(action.user)))
    // );
    // login$.subscribe();
  }

  // createEffect - This function takes care of error handling and subscription automatically
  login$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(AuthActions.login),
        tap((action) =>
          localStorage.setItem("user", JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(AuthActions.logout),
        tap((action) => {
          localStorage.removeItem("user");
          this.router.navigateByUrl("/login");
        })
      ),
    { dispatch: false }
  );
}
