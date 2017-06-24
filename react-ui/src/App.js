import React, { Component } from 'react';
import { store, actions } from './redux/Store.js';
import Api from './Api.js';
import Types from './Types.js';
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

  shinyVersion() {
    store.dispatch({
      type: actions.SHINY,
      sprite: this.state.shiny
    })
  }

  normalVersion() {
    store.dispatch({
      type: actions.NORMAL,
      sprite: this.state.normal
    })
  }

  render() {

    let revTypes = this.state.types.reverse();
    let types = revTypes.map((x) => <Types
      type={x.type.name}
    />);

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
          <p>Type: </p>
          <ol>
            {types}
          </ol>
        </div>

      </div>
    );
  }
}

export default App;
