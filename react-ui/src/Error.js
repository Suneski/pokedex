import React from 'react';
import { store, actions } from './redux/Store.js';

class Error extends React.Component {
  render() {
    return (
      <div className={this.props.errorVisibility}>
        Pokemon Not Found
      </div>
    )
  }
}

export default Error;
