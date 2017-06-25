import React from 'react';
import Pokemon from 'react-pokemon';
import { store, actions } from './redux/Store.js';
import NoImage from './images/no-image.png';

class Sugimori extends React.Component {
  render() {

    return(
      <div className="sugimori">
        <Pokemon name={this.props.name} />
      </div>
    )
  }
}

export default Sugimori;
