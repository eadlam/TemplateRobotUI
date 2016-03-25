import alt from '../libs/alt';


class CommandActions{

  create(command){
    return command;
  }

  select(drone){

    this.publish({
      header: {},
      type: "select",
      value: drone.name
    });

    // This just supresses the alt.js warning that nothing was dispatched;
    return true;
  }

  publish(command){

    // Here you would publish to ROS
    console.log(command.type, command);
    this.create(command);

    // This just supresses the alt.js warning that nothing was dispatched;
    return true;
  }

}

export default alt.createActions(CommandActions);