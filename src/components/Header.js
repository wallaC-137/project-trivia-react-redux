import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends Component {
  render() {
    const { name, email, score } = this.props;
    const emailString = md5(email).toString();
    return (
      <header>
        <img src={ `https://www.gravatar.com/avatar/${emailString}` } data-testid="header-profile-picture" alt={ name } />
        <h3 data-testid="header-player-name">{ name }</h3>
        <h3 data-testid="header-score">{score}</h3>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.email,
  score: state.player.score,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
}.isRequired;
export default connect(mapStateToProps)(Header);
