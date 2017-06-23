import $ from 'jquery';
import store from './redux/Store.js';

const Api = {
  makeAjaxCall(searchTerm) {
    $.ajax({
      url: 'http://pokeapi.co/api/v2/pokemon/' + searchTerm
    })
    .done((data) => {
      store.dispatch({
        type: 'SAVE_RESULTS',
        results: data
      })
    });
  }
}

export default Api;
