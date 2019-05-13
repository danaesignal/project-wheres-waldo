import React, { PureComponent } from 'react';

class ScoreLine extends PureComponent{
  state = {

  };

  render(){
    return (
      <div>
        {unescape(this.props.score.name)}, {this.props.score.time} seconds.
      </div>
    );
  }
}

export default ScoreLine;