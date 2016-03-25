import uuid from 'node-uuid';
import alt from '../libs/alt';
import CommandActions from '../actions/CommandActions';
import update from 'react-addons-update';

class CommandStore {

  constructor() {
    this.bindActions(CommandActions);

    this.commands = [];
  }

  create(command) {
    const commands = this.commands;

    command.id = uuid.v4();
    command.type = command.type;
    command.value = command.value;

    this.setState({
      commands: commands.concat(command)
    });
  }

}

export default alt.createStore(CommandStore, 'CommandStore');
