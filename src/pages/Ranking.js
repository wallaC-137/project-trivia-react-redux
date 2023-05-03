import React from 'react';
import PropTypes from 'prop-types';

class Ranking extends React.Component {
  render() {
    const { history: { push } } = this.props;
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          data-testid="btn-go-home"
          onClick={ () => push('/') }
        >
          {' '}
          Ínicio
          {' '}

        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Ranking;
