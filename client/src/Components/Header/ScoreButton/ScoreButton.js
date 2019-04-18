// Button which activates the modal score display.

import React, { PureComponent } from 'react';
import classes from './ScoreButton.module.scss';

class ScoreButton extends PureComponent{
  render(){
    return (
      <div className={classes.ScoreButton}>
        Score
      </div>
    );
  }
}

export default ScoreButton;