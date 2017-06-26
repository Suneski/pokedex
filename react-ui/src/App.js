import React, { Component } from 'react';
import { store, actions } from './redux/Store.js';
import Api from './Api.js';
import Error from './Error.js';
import Sugimori from './Sugimori.js';
import Summary from './Summary.js';
import Loader from './images/pokeball-loader.gif'
import Pokedex from './images/pokedex.png'
import Pokeball from './images/pokeball.png'
import Bulbapedia from './images/bulbapedia.png'

class App extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  updateSearchTerm(evt) {
    store.dispatch({
      type: actions.SEARCH,
      searchTerm: evt.target.value
    })
    if (evt.keyCode === 13) {
      Api.makeAjaxCall(this.state.searchTerm.toLowerCase());
    }
  }

  makeAjaxCall() {
    Api.makeAjaxCall(this.state.searchTerm.toLowerCase());
  };

  render() {
    let bulbapedia = `https://bulbapedia.bulbagarden.net/wiki/${this.state.name}_(Pokemon)`

    return (
      <div className="App">

        <header>
          <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer"><img src={Pokeball} alt="pokeball"  className="pokeball"/></a>
          <input placeholder="pokemon name" onKeyUp={(evt) => this.updateSearchTerm(evt)}/>
          <button onClick={() => this.makeAjaxCall()}>LOOK UP</button>
          <a href={bulbapedia} target="_blank" rel="noopener noreferrer"><img src={Bulbapedia} alt="pokeball"  className={this.state.bulbapedia}/></a>
        </header>

        <div className={this.state.welcomeVisibility}>
          <h1>POKEDEX</h1>
          <img src={Pokedex} alt="pokedex"/>
          <p>(Generation 7 not supported by API)</p>
        </div>

        <div>
          <img className={this.state.loader} src={Loader} alt="loading gif"/>
        </div>

        <Error
          errorVisibility={this.state.errorVisibility}
        />

        <div className={this.state.pokeDetails}>

          <Sugimori
            name={this.state.name}
          />


          <Summary
            name={this.state.name.toUpperCase()}
            id={this.state.id}
            height={this.state.height}
            weight={this.state.weight}
            hp={this.state.hp}
            attack={this.state.attack}
            defense={this.state.defense}
            specialAttack={this.state.specialAttack}
            specialDefense={this.state.specialDefense}
            speed={this.state.speed}
            types={this.state.types}
            sprite={this.state.sprite}
            backSprite={this.state.backSprite}
            normal={this.state.normal}
            shiny={this.state.shiny}
            backNormal={this.state.backNormal}
            backShiny={this.state.backShiny}
            shinyVisibility={this.state.shinyVisibility}
            normalVisibility={this.state.normalVisibility}
          />


        </div>

      </div>
    );
  }
}

export default App;
