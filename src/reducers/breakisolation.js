import {Map} from 'immutable';
import { NAVIGATE } from '../constants/ActionTypes';

export const INITIAL_STATE = new Map();

export default function breakisolation(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
  case NAVIGATE:
    return state;
  default:
    return state;
  }
}
