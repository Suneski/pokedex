import React from 'react';
import Types from './Types.js';
import Sprite from './Sprite.js';

class Summary extends React.Component {

  render() {

    // let revTypes = this.state.types.reverse();
    // let types = revTypes.map((x) => <Types
    //   type={x.type.name}
    // />);

    let types = this.props.types.map((x, i) => <Types
      type={x.type.name.toUpperCase()}
      key={i}
    />);

    return(
      <div className="poke-info">

        <h1 className="pkmn-name">
          #{this.props.id} {this.props.name}
        </h1>

        <Sprite          
          sprite={this.props.sprite}
          backSprite={this.props.backSprite}
          normal={this.props.normal}
          shiny={this.props.shiny}
          backNormal={this.props.backNormal}
          backShiny={this.props.backShiny}
          shinyVisibility={this.props.shinyVisibility}
          normalVisibility={this.props.normalVisibility}
        />

        Type: {types}
        <br/>
        <p>Height: {this.props.height}</p>
        <p>Weight: {this.props.weight}</p>
        <br/>
        <p>Base Stats</p>
        <p>HP: {this.props.hp}</p>
        <p>Attack: {this.props.attack}</p>
        <p>Defense: {this.props.defense}</p>
        <p>Special Attack: {this.props.specialAttack}</p>
        <p>Special Defense: {this.props.specialDefense}</p>
        <p>Speed: {this.props.speed}</p>

      </div>
    )
  }
}

export default Summary;
