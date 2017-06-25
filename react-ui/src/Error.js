import React from 'react';

class Error extends React.Component {
  render() {
    return (
      <div className={this.props.errorVisibility}>
        Pokemon Not Found!
      </div>
    )
  }
}

export default Error;
