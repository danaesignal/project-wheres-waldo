// Header will contain the link to open the modal that displays high scores
// Header will also contain a list of names showing who has been identified and
// who yet remains to be (differentiated by name color)

import React, { PureComponent } from 'react';
import classes from './Header.module.scss';
import NameBar from './NameBar/NameBar';
import ScoreButton from './ScoreButton/ScoreButton';

class Header extends PureComponent{
  render(){
    return (
      <div className={classes.Header}>
        <NameBar/>
        <ScoreButton/>
      </div>
    );
  }
}

export default Header;