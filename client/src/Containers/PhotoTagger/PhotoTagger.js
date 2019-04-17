// Main container for app
// Will: contain state, query API and interpret results, define functions for
// lower components to use
// Won't: display anything on its own

import React, { PureComponent } from 'react';
import Modal from '../../HOC/Modal/Modal';
import Header from '../../Components/Header/Header';
import Photo from '../../Components/Photo/Photo';

class PhotoTagger extends PureComponent{
  state = {

  };

  render(){
    return (
      <div>
        <Modal/>
        <Header/>
        <Photo/>
      </div>
    );
  }
}

export default PhotoTagger;