import AltContainer from 'alt-container';
import React from 'react';
import CommandActions from '../actions/CommandActions';
import CommandStore from '../stores/CommandStore';

import Commands from '../components/Commands';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commands: []
    }
  }

  componentDidMount(){
    CommandStore.listen(function (state) {
      this.setState({commands:state.commands});
    }.bind(this));
  }

  render() {
    return (
      <div>
        <button onClick={this.publishEvent}>Publish Event: (select drone_1)</button>
        <Commands data={this.state.commands}/>
      </div>
    );
  }

  publishEvent() {
    CommandActions.select({name: 'drone_1'});
  }

  

}
