import {Map} from 'immutable';
import { NAVIGATE, PAGES, LOAD_DATA } from '../constants/ActionTypes';
import navigateTo from './navigateTo';
import loadData from './loadData';

export const INITIAL_STATE = new Map(
  {
    currentPage: PAGES.BLOG,
    language: 'en',
    data: {
      about_us: {
        label: '',
        content: [],
      },
    },
  }
);

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
  case NAVIGATE:
    return navigateTo(state, action.page);
  case LOAD_DATA:
    return loadData(state, action.data);
  default:
    return state;
  }
}
