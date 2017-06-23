import React, { Component } from 'react';
import store from './redux/Store.js';
import $ from 'jquery';

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
    $.ajax({
      url: 'http://pokeapi.co/api/v2/pokemon/' + this.state.searchTerm
    })
    .done((data) => {
      store.dispatch({
        type: 'SAVE_RESULTS',
        results: data
      })
    });
  };

  render() {
    return (
      <div className="App">
        <input onKeyUp={(evt) => this.updateSearchTerm(evt)}/>
        <button onClick={() => this.makeAjaxCall()}>SEARCH</button>
      </div>
    );
  }
}

export default App;
