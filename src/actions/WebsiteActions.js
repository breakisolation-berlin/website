import { NAVIGATE } from '../constants/ActionTypes';

export function navigateTo(page) {
  return {
    type: NAVIGATE,
    page: page,
  };
}
