// Main container for app
// Will: contain state, query API and interpret results, define functions for
// lower components to use
// Won't: display anything on its own

import React, { PureComponent } from 'react';
import classes from './PhotoTagger.module.scss';
import Modal from '../../HOC/Modal/Modal';
import Header from '../../Components/Header/Header';
import Photo from '../../Components/Photo/Photo';

class PhotoTagger extends PureComponent{
  state = {

  };

  eventReporter = (e) => {
    let image = document.querySelector('#Photo');
    console.log((e.clientY + window.scrollY)/image.clientHeight);
  }

  render(){
    return (
      <div className={classes.PhotoTagger}>
        <Modal/>
        <Header/>
        <Photo
          click={this.eventReporter}
        />
      </div>
    );
  }
}

export default PhotoTagger;