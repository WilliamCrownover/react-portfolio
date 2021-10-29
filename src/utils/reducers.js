import { useReducer } from 'react';
import {
  UPDATE_PAGE,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };

    default:
      return state;
  }
};

export function usePortfolioReducer(initialState) {
  return useReducer(reducer, initialState);
}
