import React, { Component } from 'react';
import store from './redux/Store.js';
import Api from './Api.js';
import Pokemon from 'react-pokemon';

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
      type: 'SEARCH',
      searchTerm: evt.target.value
    })
  }

  makeAjaxCall() {
    Api.makeAjaxCall(this.state.searchTerm);
  };

  shinyVersion() {
    store.dispatch({
      type: 'SHINY',
      sprite: this.state.shiny
    })
  }

  normalVersion() {
    store.dispatch({
      type: 'NORMAL',
      sprite: this.state.normal
    })
  }

  render() {
    return (
      <div className="App">
        <input onKeyUp={(evt) => this.updateSearchTerm(evt)}/>
        <button onClick={() => this.makeAjaxCall()}>SEARCH</button>
        <div className={this.state.pokeDetails}>
          <h1>{this.state.name}</h1>
          <Pokemon name={this.state.name} />
          <img src={this.state.sprite} alt="pokemon pic" />
          <button onClick={() => this.shinyVersion()}>Shiny!</button>
          <button onClick={() => this.normalVersion()}>Normal...</button>
          <p>Stats</p>
          <p>HP: {this.state.hp}</p>
          <p>Attack: {this.state.attack}</p>
          <p>Defense: {this.state.defense}</p>
          <p>Special Attack: {this.state.specialAttack}</p>
          <p>Special Defense: {this.state.specialDefense}</p>
          <p>Speed: {this.state.speed}</p>
        </div>

      </div>
    );
  }
}

export default App;
