// Contains the list of names being tagged, with text colors differentiating
// which people have been correctly tagged
import React, { PureComponent } from 'react';
import classes from './NameBar.module.scss';
import Name from './Name/Name';

class NameBar extends PureComponent{
  state = {

  };

  render(){
    return (
      <div className={classes.NameBar}>
        <Name
          content="Leonardo"
          click={this.props.click}
          active={this.props.userSelection === "Leonardo"}
          complete={this.props.scoreCard.includes("Leonardo")}
        />
        <Name
          content="Donatello"
          click={this.props.click}
          active={this.props.userSelection === "Donatello"}
          complete={this.props.scoreCard.includes("Donatello")}
        />
        <Name
          content="Michaelangelo"
          click={this.props.click}
          active={this.props.userSelection === "Michaelangelo"}
          complete={this.props.scoreCard.includes("Michaelangelo")}
        />
        <Name
          content="Raphael"
          click={this.props.click}
          active={this.props.userSelection === "Raphael"}
          complete={this.props.scoreCard.includes("Raphael")}
        />
      </div>
    );
  }
}

export default NameBar;