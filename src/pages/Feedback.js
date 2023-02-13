import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feedback extends Component {
  render() {
    const { assertions } = this.props;
    const number = 3;
    return (assertions >= number ? (
      <div>
        <h1 data-testid="feedback-text">Well Done!</h1>
      </div>) : (<div><h1 data-testid="feedback-text">Could be better...</h1></div>)
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

Feedback.propTypes = {
  assertions: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Feedback);
