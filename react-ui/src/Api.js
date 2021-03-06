import $ from 'jquery';
import { store, actions } from './redux/Store.js';
import NoImage from './images/no-image.png';

const Api = {
  makeAjaxCall(arg) {
    let searchTerm;

    store.dispatch({
      type: actions.SHOW_LOADER
    })

    switch (arg) {
      case "deoxys":
        searchTerm = "deoxys-normal";
        break;
      case "giratina":
        searchTerm = "giratina-altered";
        break;
      case "shaymin":
        searchTerm = "shaymin-land";
        break;
      case "darmanitan":
        searchTerm = "darmanitan-standard";
        break;
      case "meloetta":
        searchTerm = "meloetta-aria";
        break;
      case "hoopa":
        searchTerm = "hoopa-confined";
        break;
      default:
        searchTerm = arg;
    }

    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/' + searchTerm
    })
    .catch( (ex) => {
      store.dispatch({
        type: actions.ERROR
      })
    })
    .done((data) => {
      let sprite = data.sprites.front_default;
      let backSprite = data.sprites.back_default;

      if (sprite === null) {
        sprite = NoImage
      }

      if (backSprite === null) {
        backSprite = NoImage
      }

      let revTypes = data.types.reverse();

      store.dispatch({
        type: actions.STORE_RESULTS,
        results: data,
        name: data.name,
        id: data.id,
        weight: data.weight / 10 + 'kg',
        height: data.height / 10 + 'm',
        sprite: sprite,
        backSprite: backSprite,
        normal: data.sprites.front_default,
        shiny: data.sprites.front_shiny,
        backNormal: data.sprites.back_default,
        backShiny: data.sprites.back_shiny,
        hp: data.stats[5].base_stat,
        attack: data.stats[4].base_stat,
        defense: data.stats[3].base_stat,
        specialAttack: data.stats[2].base_stat,
        specialDefense: data.stats[1].base_stat,
        speed: data.stats[0].base_stat,
        types: revTypes
      })
    });
  }
}

export default Api;
