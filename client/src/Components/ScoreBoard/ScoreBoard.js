// Displays the high score list
// Does not update dynamically

import React, { PureComponent } from 'react';
import ScoreLine from './ScoreLine/ScoreLine';
import classes from './ScoreBoard.module.scss';

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
      <div className={classes.ScoreBoard}>
        <div><span className={classes.title}>High Scores:</span></div>
        {output}
      </div>
    );
  }
}

export default ScoreBoard;