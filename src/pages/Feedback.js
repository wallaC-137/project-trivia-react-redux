import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feedback extends Component {
  render() {
    const { assertions, score } = this.props;
    const number = 3;
    return (assertions >= number ? (
      <div>
        <h1 data-testid="feedback-text">Well Done!</h1>
        <p data-testid="feedback-total-question">{assertions}</p>
        <p data-testid="feedback-total-score">{score}</p>
      </div>)
      : (
        <div>
          <h1 data-testid="feedback-text">Could be better...</h1>
          <p data-testid="feedback-total-question">{assertions}</p>
          <p data-testid="feedback-total-score">{score}</p>
        </div>)
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  assertions: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Feedback);
