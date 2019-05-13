import React, { PureComponent } from 'react';

class NameSubmission extends PureComponent{
  render(){
    return (
      <div>
        <div>You win!</div>
        <div>Your time: {this.props.scoreCard.time} seconds.</div>
        <form onSubmit={this.handleNameSubmission}>
          <label>
            Your Name:
            <input type="text" value={this.props.name} onChange={this.props.handleNameChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NameSubmission;