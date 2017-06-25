import React, { Component } from 'react';
import { store, actions } from './redux/Store.js';
import Api from './Api.js';
import Error from './Error.js';
import Sprite from './Sprite.js';
import Sugimori from './Sugimori.js';
import Summary from './Summary.js';
import Loader from './images/pokeball-loader.gif'

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
    return (
      <div className="App">
        <input onKeyUp={(evt) => this.updateSearchTerm(evt)}/>
        <button onClick={() => this.makeAjaxCall()}>SEARCH</button>
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
          <Sprite
            name={this.state.name}
            sprite={this.state.sprite}
            normal={this.state.normal}
            shiny={this.state.shiny}
            shinyVisibility={this.state.shinyVisibility}
            normalVisibility={this.state.normalVisibility}
          />
        <h1 className="pkmn-name">{this.state.name.toUpperCase()} #{this.state.id}</h1>
          <Summary
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
          />
        </div>

      </div>
    );
  }
}

export default App;
