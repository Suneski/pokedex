import { createStore } from 'redux';

const actions = {
  SEARCH: 'SEARCH',
  STORE_RESULTS: 'STORE_RESULTS',
  SHINY: 'SHINY',
  NORMAL: 'NORMAL',
  ERROR: 'ERROR',
  SHOW_LOADER: 'SHOW_LOADER',
}

var initialState = {
  searchTerm: 'missingno',
  pokeDetails: 'pokeDetails-invisible',
  bulbapedia: 'bulbapedia-invisible',
  welcomeVisibility: 'welcome-visible',
  errorVisibility: 'error-invisible',
  normalVisibility: 'normal-invisible',
  shinyVisibility: 'shiny-visible',
  loader: 'loader-invisible',
  results: [],
  name: 'missingno',
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
        welcomeVisibility: 'welcome-invisible',
        bulbapedia: 'bulbapedia-invisible',
        loader: 'loader-visible',
        pokeDetails: 'pokeDetails-invisible',
        errorVisibility: 'error-invisible',
      });
    case actions.ERROR:
      return Object.assign({}, state, {
        errorVisibility: 'error-visible',
        bulbapedia: 'bulbapedia-invisible',
        pokeDetails: 'pokeDetails-invisible',
        loader: 'loader-invisible',
      });
    case actions.STORE_RESULTS:
      return Object.assign({}, state, {
        pokeDetails: 'pokeDetails-visible',
        bulbapedia: 'bulbapedia-visible',
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
        backSprite: action.backSprite,
        normal: action.normal,
        shiny: action.shiny,
        backNormal: action.backNormal,
        backShiny: action.backShiny,
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
        backSprite: action.backSprite,
        normalVisibility: 'normal-visible',
        shinyVisibility: 'shiny-invisible',
      });
    case actions.NORMAL:
      return Object.assign({}, state, {
        sprite: action.sprite,
        backSprite: action.backSprite,
        normalVisibility: 'normal-invisible',
        shinyVisibility: 'shiny-visible',
      });
    default: return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export { store, actions };
