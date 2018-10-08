import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import pups from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.pups to the cards json array
  state = {
    pups,
    clickedPuppyIds: [],
    score: 0,
    goal: 9,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedPuppyIds = this.state.clickedPuppyIds;

    if(clickedPuppyIds.includes(id)){
      this.setState({ clickedPuppyIds: [], score: 0, status:  "Game Over! You lost. Click to play again!" });
      return;
    }else{
      clickedPuppyIds.push(id)

      if(clickedPuppyIds.length === 9){
        this.setState({score: 9, status: "You Won! Click to play again!", clickedPuppyIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ pups, clickedPuppyIds, score: clickedPuppyIds.length, status: " " });

      for (let i = pups.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pups[i], pups[j]] = [pups[j], pups[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clicky-Clikster</h1>
          <p className="App-intro">
            Do not click same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={9}
               status={this.state.status}
               />
        <Wrapper>
        <div className="jumbotron container card-container">
          {this.state.pups.map(puppy => (
          
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
           
          ))}
           </div>
        </Wrapper>
       <footer className="bg-primary text-center text-light"> <h1>A simple React ClickYY GamEE</h1></footer>
    </div>
    );
  }
}

export default App;
