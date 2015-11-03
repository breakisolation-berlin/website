import {Map} from 'immutable';
import { NAVIGATE, PAGES } from '../constants/ActionTypes';
import navigateTo from './navigateTo';

export const INITIAL_STATE = new Map({currentPage: PAGES.BLOG});

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
  case NAVIGATE:
    return navigateTo(state, action.page);
  default:
    return state;
  }
}
