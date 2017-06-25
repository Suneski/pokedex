import React from 'react';
import Pokemon from 'react-pokemon';

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
