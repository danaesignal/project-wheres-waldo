// Main container for app
// Will: contain state, query API and interpret results, define functions for
// lower components to use
// Won't: display anything on its own

import React, { PureComponent } from 'react';
import classes from './PhotoTagger.module.scss';
import Moment from 'moment';
import Modal from '../../HOC/Modal/Modal';
import Header from '../../Components/Header/Header';
import Photo from '../../Components/Photo/Photo';
import ScoreBoard from '../../Components/ScoreBoard/ScoreBoard';
import NameSubmission from '../../Components/NameSubmission/NameSubmission';

class PhotoTagger extends PureComponent{
  state = {
    'userSelection': 'Leonardo',
    'scoreCard': {},
    'showScoreModal': false,
    'showSubmissionModal': false,
    'name': ''
  };

  async componentDidMount(){
    const turtleResponse = await fetch(`http://localhost:4500/target/${this.state.userSelection}`);
    const turtleJson = await turtleResponse.json();
    const turtleData = {...turtleJson[0]};

    const scoreResponse = await fetch(`http://localhost:4500/score/`);
    const scoreJson = await scoreResponse.json();
    const scoreData = [...scoreJson];

    this.setState({'turtleData': turtleData});
    this.setState({'highScores': scoreData});
    this.setState({'startTime': Moment()})
  }

  positionChecker = (e) => {
    const image = document.querySelector('#Photo');
    const imageHeight = image.clientHeight;
    const imageWidth = image.clientWidth;
    const mouseXPosition = (e.clientX + window.scrollX);
    const mouseYPosition = (e.clientY + window.scrollY);
    const percentageXPosition = mouseXPosition / imageWidth;
    const percentageYPosition = mouseYPosition / imageHeight;

    const turtle = this.state.turtleData;

    const topLeft = [...turtle.topLeft];
    const bottomRight = [...turtle.bottomRight];
    const insideXBounds = topLeft[0] < percentageXPosition && percentageXPosition < bottomRight[0];
    const insideYBounds = topLeft[1] < percentageYPosition && percentageYPosition < bottomRight[1];

    return (insideXBounds && insideYBounds);
  };

  menuClickHandler = async (turtle) => {
    if(this.state.scoreCard[turtle]) return;

    const turtleResponse = await fetch(`http://localhost:4500/target/${turtle}`);
    const turtleJson = await turtleResponse.json();
    const turtleData = {...turtleJson[0]};

    this.setState({'turtleData': turtleData});
    this.setState({'userSelection': turtle})
  };

  photoClickHandler = (e) => {
    const scoreCard = {...this.state.scoreCard};
    // If they clicked the correct turtle, record that.
    if(this.positionChecker(e)){
      if(!scoreCard[this.state.userSelection]){
        scoreCard[this.state.userSelection] = true;
      }
    }
    this.wonGameDetector(scoreCard);
  };

  wonGameDetector = async (scoreCard) => {
    if(Object.keys(scoreCard).length > 3){
      // If there is already a time recorded on the scorecard, don't record a second one
      if(scoreCard.time) return
      // If there are four distinct records, they won. Record their time.
      scoreCard.time = Moment().diff(this.state.startTime, 'seconds');
      // Open the modal to allow them to enter their name.
      this.setState({'showSubmissionModal': true});
      // Post their time as an anonymous record and store their ID on the score card
      scoreCard = await this.postGameScore(scoreCard);
    }
    this.setState({'scoreCard': scoreCard});
  };

  postGameScore = async (scoreCard) => {
    const rawResponse = await fetch('http://localhost:4500/score/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({time: scoreCard.time})
    });
    const content = await rawResponse.json();
    const id = content['_id'];
    scoreCard.id = id;
    return scoreCard;
  };

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleNameSubmission = async () => {
    return await fetch('http://localhost:4500/score/add', {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({_id: this.state.scoreCard.id, name: this.state.name})
    });
  }

  toggleScoreModal = () => {
    this.setState({ showScoreModal: !this.state.showScoreModal })
  }

  toggleSubmissionModal = () => {
    this.setState({ showSubmissionModal: !this.state.showSubmissionModal })
  }

  render(){
    return (
      <div className={classes.PhotoTagger}>
        {/* Score Modal */}
        <Modal
          showModal={this.state.showScoreModal}
          toggleModal={this.toggleScoreModal}>
          <ScoreBoard
            scoreData={this.state.highScores}
          />
        </Modal>
        {/* Game End Modal */}
        <Modal
          onlyCloseWithX
          showModal={this.state.showSubmissionModal}
          toggleModal={this.toggleSubmissionModal}>
          <NameSubmission
            handleNameSubmission={this.handleNameSubmission}
            scoreCard={this.state.scoreCard}
            name={this.state.name}
            handleNameChange={this.handleNameChange}/>
        </Modal>
        <Header
          nameClick={this.menuClickHandler}
          userSelection={this.state.userSelection}
          scoreCard={Object.keys(this.state.scoreCard)}
          toggleModal={this.toggleScoreModal}
        />
        <Photo
          click={this.photoClickHandler}
        />
      </div>
    );
  }
}

export default PhotoTagger;