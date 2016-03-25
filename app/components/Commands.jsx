import React from 'react';
import Command from './Command.jsx';

// Job iterator
var Commands = React.createClass({

  render: function() {
    console.log("Writing commands", this.props.data);
    return (
      <div>
        { this.props.data.map(
            function(command){
              return (
                <Command key={command.id} data={command} />
              )
          })}
      </div>
    );

  }

});

export default Commands;
