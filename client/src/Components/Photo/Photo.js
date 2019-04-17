// This component holds is where the photo being tagged is displayed. Clicking
// on various areas of this component will be the primary way the user interacts
// with the application.

import React, { PureComponent } from 'react';
import TMNT from '../../Assets/Images/tmnt.jpg';

class Photo extends PureComponent{
  state = {

  };

  render(){
    return (
      <div>
        <img src={TMNT} alt="Teenage Mutant Ninja Turtles"/>
      </div>
    );
  }
}

export default Photo;