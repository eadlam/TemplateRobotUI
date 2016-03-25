import AltContainer from 'alt-container';
import React from 'react';

export default class Command extends React.Component {

  render() {
    console.log("Writing command", this.props.data);
    return (
      <div>
        <b>{this.props.data.type}</b>: {this.props.data.value}
      </div>
    );
  }

}
