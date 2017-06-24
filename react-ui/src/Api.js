import $ from 'jquery';
import store from './redux/Store.js';

const Api = {
  makeAjaxCall(searchTerm) {
    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/' + searchTerm
    })
    .done((data) => {
      store.dispatch({
        type: 'SAVE_RESULTS',
        results: data,
        name: data.name,
        sprite: data.sprites.front_default,
        normal: data.sprites.front_default,
        shiny: data.sprites.front_shiny,
        hp: data.stats[5].base_stat,
        attack: data.stats[4].base_stat,
        defense: data.stats[3].base_stat,
        specialAttack: data.stats[2].base_stat,
        specialDefense: data.stats[1].base_stat,
        speed: data.stats[0].base_stat,
        types: data.types
      })
    });
  }
}

export default Api;
