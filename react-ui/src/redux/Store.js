import { createStore } from 'redux';

const actions = {
  SEARCH: 'SEARCH',
  SAVE_RESULTS: 'SAVE_RESULTS',
  SHINY: 'SHINY',
  NORMAL: 'NORMAL',
  ERROR: 'ERROR',
  SHOW_LOADER: 'SHOW_LOADER',
}

var initialState = {
  searchTerm: 'bulbasaur',
  pokeDetails: 'pokeDetails-invisible',
  errorVisibility: 'error-invisible',
  normalVisibility: 'normal-invisible',
  shinyVisibility: 'shiny-visible',
  loader: 'loader-invisible',
  results: [],
  name: 'bulbasaur',
  types: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.SEARCH:
      return Object.assign({}, state, {
        searchTerm: action.searchTerm,
      });
    case actions.SHOW_LOADER:
      return Object.assign({}, state, {
        loader: 'loader-visible',
        pokeDetails: 'pokeDetails-invisible',
        errorVisibility: 'error-invisible',
      });
    case actions.ERROR:
      return Object.assign({}, state, {
        errorVisibility: 'error-visible',
        pokeDetails: 'pokeDetails-invisible',
        loader: 'loader-invisible',
      });
    case actions.SAVE_RESULTS:
      return Object.assign({}, state, {
        pokeDetails: 'pokeDetails-visible',
        errorVisibility: 'error-invisible',
        normalVisibility: 'normal-invisible',
        shinyVisibility: 'shiny-visible',
        loader: 'loader-invisible',
        results: action.results,
        name: action.name,
        id: action.id,
        weight: action.weight,
        height: action.height,
        sprite: action.sprite,
        normal: action.normal,
        shiny: action.shiny,
        hp: action.hp,
        attack: action.attack,
        defense: action.defense,
        specialAttack: action.specialAttack,
        specialDefense: action.specialDefense,
        speed: action.speed,
        types: action.types
      });
    case actions.SHINY:
      return Object.assign({}, state, {
        sprite: action.sprite,
        normalVisibility: 'normal-visible',
        shinyVisibility: 'shiny-invisible',
      });
    case actions.NORMAL:
      return Object.assign({}, state, {
        sprite: action.sprite,
        normalVisibility: 'normal-invisible',
        shinyVisibility: 'shiny-visible',
      });
    default: return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store, actions };
