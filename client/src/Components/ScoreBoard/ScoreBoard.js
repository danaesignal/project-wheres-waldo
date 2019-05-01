import React, { PureComponent } from 'react';

class ScoreBoard extends PureComponent{
  render(){
    let output = [<p>test</p>,<p>test</p>,<p>test</p>,<p>test</p>]

    return (
      <div>
        {output}
      </div>
    );
  }
}

export default ScoreBoard;