import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const estPermititurGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const userID = localStorage.getItem('userId');

  localStorage.setItem('lastPath', to.path);
  if (!userID) {
    return next({
      name: 'login',
    });
  }
  return next();
};

export default estPermititurGuard;
