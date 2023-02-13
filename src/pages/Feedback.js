import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  clickButton = async () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <div className="feedback">
        <h1 data-testid="feedback-text">Feedback</h1>
        <button
          type="submit"
          onClick={ this.clickButton }
        >
          Play Again
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

export default Feedback;
