import { NAVIGATE, LOAD_DATA } from '../constants/ActionTypes';
require('es6-promise').polyfill();
require('isomorphic-fetch');

function fetchData() {
  return fetch('./translations/de.json');
}

export function navigateTo(page) {
  return {
    type: NAVIGATE,
    page: page,
  };
}

export function loadData() {
  return (dispatch) => {
    return fetchData().then(response => response.json())
      .then(data => dispatch({
        type: LOAD_DATA,
        data: data,
      }));
  };
}
