import { createStore } from 'redux';

const actions = {
  SEARCH: 'SEARCH',
  SAVE_RESULTS: 'SAVE_RESULTS',
  SHINY: 'SHINY',
  NORMAL: 'NORMAL',
}

var initialState = {
  searchTerm: '',
  pokeDetails: 'pokeDetails-invisible',
  results: [],
  name: ''
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.SEARCH:
      return Object.assign({}, state, {
        searchTerm: action.searchTerm
      });
    case actions.SAVE_RESULTS:
      return Object.assign({}, state, {
        results: action.results,
        name: action.name,
        sprite: action.sprite,
        normal: action.normal,
        shiny: action.shiny,
        hp: action.hp,
        attack: action.attack,
        defense: action.defense,
        specialAttack: action.specialAttack,
        specialDefense: action.specialDefense,
        speed: action.speed,
      });
    case actions.SHINY:
      return Object.assign({}, state, {
        sprite: action.sprite,
      });
    case actions.NORMAL:
      return Object.assign({}, state, {
        sprite: action.sprite,
      });
    default: return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
