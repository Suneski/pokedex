import { createStore } from 'redux';

const actions = {
  SEARCH: 'SEARCH',
  SAVE_RESULTS: 'SAVE_RESULTS',
}

var initialState = {
  searchTerm: '',
  results: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.SEARCH:
      return {  searchTerm: action.searchTerm }
    case actions.SAVE_RESULTS:
      return {  results: action.results }
    default: return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
