import { NAVIGATE, LOAD_DATA } from '../constants/ActionTypes';
require('es6-promise').polyfill();
require('isomorphic-fetch');

function fetchData(lang) {
  return fetch('./translations/' + lang + '.json');
}

export function navigateTo(page) {
  return {
    type: NAVIGATE,
    page: page,
  };
}

export function loadData(lang) {
  return (dispatch) => {
    return fetchData(lang).then(response => response.json())
      .then(data => dispatch({
        type: LOAD_DATA,
        data: data,
      }));
  };
}
