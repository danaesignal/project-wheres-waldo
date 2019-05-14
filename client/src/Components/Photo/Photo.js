// This component holds is where the photo being tagged is displayed. Clicking
// on various areas of this component will be the primary way the user interacts
// with the application.

import React, { PureComponent } from 'react';
import TMNT from '../../Assets/Images/tmnt.jpg';
import classes from './Photo.module.scss';

class Photo extends PureComponent{
  state = {

  };

  render(){
    return (
      <div id="Photo">
        <img
          src={TMNT}
          alt="Teenage Mutant Ninja Turtles"
          onClick={this.props.click}
          className={classes.Photo}
        />
      </div>
    );
  }
}

export default Photo;