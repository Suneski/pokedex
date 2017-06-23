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
      </div>
    );
  }
}

export default App;
