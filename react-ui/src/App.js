import React, { Component } from 'react';
import store from './redux/Store.js';
import Api from './Api.js';

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



  render() {
    return (
      <div className="App">
        <input onKeyUp={(evt) => this.updateSearchTerm(evt)}/>
        <button onClick={() => this.makeAjaxCall()}>SEARCH</button>
        <div className={this.state.pokeDetails}>
          <h1>{this.state.name}</h1>
          <img src={this.state.sprite} alt="pokemon pic" />
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
