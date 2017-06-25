import React from 'react';

class Types extends React.Component {

  render() {

    return(
      <p className="type">
        {this.props.type}
      </p>
    )
  }
}

export default Types;
