import { createSelector } from 'reselect';

export const selectAuth = state => state.auth;

export const selectIsAuthenticated = createSelector(
  [selectAuth],
  auth => auth.isAuthenticated
);

export const selectAuthErrors = createSelector(
  [selectAuth],
  auth => auth.errors
);

export const selectAuthLoading = createSelector(
  [selectAuth],
  auth => auth.loading
);

export const selectCurrentUser = createSelector(
  [selectAuth],
  auth => auth.currentUser
);
