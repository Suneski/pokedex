import React, { Component } from 'react';
import $ from 'jquery';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      results: []
    }
  }

  updateSearchTerm(evt) {
    this.setState({
      searchTerm: evt.target.value
    })
  }

  makeAjaxCall() {
    $.ajax({
      url: 'http://pokeapi.co/api/v2/pokemon/' + this.state.searchTerm
    })
    .done((data) => {
      this.setState({
        searchTerm: '',
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
