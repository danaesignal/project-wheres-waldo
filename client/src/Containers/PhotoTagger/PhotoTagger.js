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

  eventReporter = async (e) => {
    const image = document.querySelector('#Photo');
    const imageHeight = image.clientHeight;
    const imageWidth = image.clientWidth;
    const mouseXPosition = (e.clientX + window.scrollX);
    const mouseYPosition = (e.clientY + window.scrollY);
    const percentageXPosition = mouseXPosition / imageWidth;
    const percentageYPosition = mouseYPosition / imageHeight;

    const response = await fetch('http://localhost:4500/target/Leonardo');
    const json = await response.json();

    console.log(json.name);

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