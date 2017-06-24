import React from 'react';

class Types extends React.Component {

  render() {

    return(
      <li className="type">
        {this.props.type}
      </li>
    )
  }
}

export default Types;
