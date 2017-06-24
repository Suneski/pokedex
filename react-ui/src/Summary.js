import React from 'react';
import Types from './Types.js';
import Pokemon from 'react-pokemon';
import { store, actions } from './redux/Store.js';
import NoImage from './images/no-image.png';

class Summary extends React.Component {

  render() {

    // let revTypes = this.state.types.reverse();
    // let types = revTypes.map((x) => <Types
    //   type={x.type.name}
    // />);

    let types = this.props.types.map((x) => <Types
      type={x.type.name}
    />);

    return(
      <div>
        <p>Height: {this.props.height}</p>
        <p>Weight: {this.props.weight}</p>
        <p>Base Stats</p>
        <p>HP: {this.props.hp}</p>
        <p>Attack: {this.props.attack}</p>
        <p>Defense: {this.props.defense}</p>
        <p>Special Attack: {this.props.specialAttack}</p>
        <p>Special Defense: {this.props.specialDefense}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Type: </p>
        <ol>
          {types}
        </ol>
      </div>
    )
  }
}

export default Summary;
