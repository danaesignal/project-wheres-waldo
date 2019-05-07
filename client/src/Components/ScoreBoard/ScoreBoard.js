import React, { PureComponent } from 'react';
import ScoreLine from './ScoreLine/ScoreLine';

class ScoreBoard extends PureComponent{
  render(){
    let output = this.props.scoreData.map((score, index) => {
      return (
        <ScoreLine
          score={score}
          key={index}
        />
      );
    });

    return (
      <div>
        {output}
      </div>
    );
  }
}

export default ScoreBoard;