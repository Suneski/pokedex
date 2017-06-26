import React from 'react';
import { store, actions } from './redux/Store.js';
import NoImage from './images/no-image.png';

class Sprite extends React.Component {
  shinyVersion() {
    let sprite = this.props.shiny;
    let backSprite = this.props.backShiny;

    if (this.props.shiny === null) {
      sprite = NoImage
    }

    if (this.props.backShiny === null) {
      backSprite = NoImage
    }

    store.dispatch({
      type: actions.SHINY,
      sprite: sprite,
      backSprite: backSprite,
    })
  }

  normalVersion() {
    let sprite = this.props.normal;
    let backSprite = this.props.backNormal;

    if (this.props.normal === null) {
      sprite = NoImage
    }

    if (this.props.backNormal === null) {
      backSprite = NoImage
    }

    store.dispatch({
      type: actions.NORMAL,
      sprite: sprite,
      backSprite: backSprite,
    })
  }

  render() {

    return(
      <div className="sprite-div">
        <img
          className="sprite"
          src={this.props.sprite}
          alt="pkmn pic" />
        <img
          className="back-sprite"
          src={this.props.backSprite}
          alt="pkmn pic" />
        <button
          onClick={() => this.shinyVersion()}
          className={this.props.shinyVisibility}>
          Shiny Sprite
        </button>
        <button
          onClick={() => this.normalVersion()}
          className={this.props.normalVisibility}>
          Normal Sprite
        </button>
      </div>
    )
  }
}

export default Sprite;
