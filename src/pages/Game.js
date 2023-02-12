import React from 'react';
import Header from '../components/Header';
import Answers from '../components/Answers';

class Game extends React.Component {
  render() {
    return (
      <main>
        <header>
          <Header />
        </header>
        <Answers { ...this.props } />
      </main>
    );
  }
}

export default Game;
