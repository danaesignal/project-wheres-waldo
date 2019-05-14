// Contains the list of names being tagged; text color differentiates people who
// have been correctly tagged (see: Name subcomponent)

import React, { PureComponent } from 'react';
import classes from './NameBar.module.scss';
import Name from './Name/Name';

class NameBar extends PureComponent{
  render(){
    let names = ["Leonardo", "Donatello", "Raphael", "Michaelangelo"];
    let nameList = names.map(name => {
      return (<Name
        content={name}
        click={this.props.click}
        active={this.props.userSelection === name}
        complete={this.props.scoreCard.includes(`${name}`)}
        key={name}
      />)
    })
    return (
      <div className={classes.NameBar}>
        {nameList}
      </div>
    );
  }
}

export default NameBar;