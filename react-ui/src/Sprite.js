import React from 'react';
import Pokemon from 'react-pokemon';
import { store, actions } from './redux/Store.js';
import NoImage from './images/no-image.png';

class Sprite extends React.Component {
  shinyVersion() {
    let sprite = this.props.shiny;

    if (this.props.shiny === null) {
      sprite = NoImage
    }

    store.dispatch({
      type: actions.SHINY,
      sprite: sprite
    })
  }

  normalVersion() {
    let sprite = this.props.normal;

    if (this.props.normal === null) {
      sprite = NoImage
    }

    store.dispatch({
      type: actions.NORMAL,
      sprite: sprite
    })
  }

  render() {

    return(
      <div className="sprite-div">
        <img
          className="sprite"
          src={this.props.sprite}
          alt="pokemon pic" />
        <button
          onClick={() => this.shinyVersion()}
          className={this.props.shinyVisibility}>
          Shiny!
        </button>
        <button
          onClick={() => this.normalVersion()}
          className={this.props.normalVisibility}>
          Normal...
        </button>
      </div>
    )
  }
}

export default Sprite;
