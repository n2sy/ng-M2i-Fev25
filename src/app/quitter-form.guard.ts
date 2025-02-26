import { CanDeactivateFn } from '@angular/router';

export const quitterFormGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  let val = component['isSubmitted'];
  if (val) return true;
  else {
    if (
      confirm(
        "Vous n'avez pas soumis le formulaire, voulez-vous vraiment quitter ?"
      )
    )
      return true;
    return false;
  }
};
