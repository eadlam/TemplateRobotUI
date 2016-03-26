import alt from '../libs/alt';
import ROSLIB from 'roslib';

var host = '10.0.0.9';
var port = '9090';

var ros = new ROSLIB.Ros({
  url : 'ws://'+host+':'+port
});

var behaviors = new ROSLIB.Topic({
    ros : ros,
    name : 'behavior',
    messageType : 'beckonbot_msgs/Behavior'
});

class CommandActions{

  create(command){
    return command;
  }


  select(drone){

    // This is just an example ROS message from the BeckonBot project
    var command = {
      header:{
        seq: 0,
        stamp: {secs: 0, nsecs: 0},
        frame_id: ''
      },
      behavior_type: 4,
      relationship: 1,
      choreography: 1,
      action: 0,
      motion: 0,
      how_to_modify: 0,
      duration:0,
      quantity: 0,
      drones: [1,2,3],
      target: {x:2, y:2, z:2},
      spot: {x:20, y:20, z:20}
    };

    this.publish(command);

    // This just supresses the alt.js warning that nothing was dispatched;
    return true;
  }


  publish(command){

    // Send data to the CommandStore
    this.create({
      type: "Behavior",
      behavior_type: command.behavior_type
    });

    // Publish message to ROS
    var message = new ROSLIB.Message(command);
    behaviors.publish(message);

    // Supress the alt.js warning that nothing was dispatched;
    return true;
  }

}

export default alt.createActions(CommandActions);
