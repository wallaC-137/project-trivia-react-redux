import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  clickButton = async () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { history: { push } } = this.props;
    return (
      <div className="feedback">
        <h1 data-testid="feedback-text">Feedback</h1>
        <button
          type="submit"
          data-testid="btn-play-again"
          onClick={ this.clickButton }
        >
          Play Again
      <div>
        <Header />
        <h1 data-testid="feedback-text">Feedback</h1>
        <button
          data-testid="btn-ranking"
          onClick={ () => push('/ranking') }
        >
          {' '}
          Ranking
          {' '}

        </button>
      </div>
    );
  }
}
Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Feedback;
