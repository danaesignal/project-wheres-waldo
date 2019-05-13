import React, { PureComponent } from 'react';
import classes from './NameSubmission.module.scss';

class NameSubmission extends PureComponent{
  render(){
    return (
      <div className={classes.NameSubmission}>
        <div className={classes.TopRow}><span className={classes.title}>You win!</span></div>
        <div>Your time: {this.props.scoreCard.time} seconds.</div>
        <div>
          <form onSubmit={this.props.handleNameSubmission}>
              <label>
                Your Name:
                <input type="text" value={this.props.name} onChange={this.props.handleNameChange} />
              </label>
              <input type="submit" value="Submit & Start Over"/>
          </form>
        </div>
      </div>
    );
  }
}

export default NameSubmission;