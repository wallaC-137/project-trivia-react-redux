import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  componentDidMount() {
    this.motivationalMassage();
  }

  motivationalMassage = () => {
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
        </div>));
  };

  render() {
    const { history: { push } } = this.props;
    return (
      <div>
        <Header />
        {this.motivationalMassage()}
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

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  assertions: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Feedback);
