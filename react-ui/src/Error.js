import React from 'react';
import Missingno from './images/wild-missingno.jpg';

class Error extends React.Component {
  render() {
    return (
      <div className={this.props.errorVisibility}>
        <p className="error-text">Pokemon Not Found!</p>
        <img src={Missingno} alt="missingno" className="missingno"/>
      </div>
    )
  }
}

export default Error;
