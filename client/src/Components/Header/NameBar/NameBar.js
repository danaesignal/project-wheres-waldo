// Contains the list of names being tagged, with text colors differentiating
// which people have been correctly tagged
import React, { PureComponent } from 'react';
import classes from './NameBar.module.scss';

class NameBar extends PureComponent{
  state = {

  };

  render(){
    return (
      <div className={classes.NameBar}>
        <div className={classes.Name}>
          <span>Leonardo</span>
        </div>
        <div className={classes.Name}>
          <span>Donatello</span>
        </div>
        <div className={classes.Name}>
          <span>Michaelangelo</span>
        </div>
        <div className={classes.Name}>
        <span>Raphael</span>
        </div>
      </div>
    );
  }
}

export default NameBar;