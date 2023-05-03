import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import styles from './header.module.css';

class Header extends Component {
  render() {
    const { name, email, score } = this.props;
    const emailString = md5(email).toString();
    return (
      <header className={ styles.playerHeader }>
        <div className={ styles.headerGravatar }>
          <div className={ styles.divImg }>
            <img
              src={ `https://www.gravatar.com/avatar/${emailString}` }
              data-testid="header-profile-picture"
              alt={ name }
              className={ styles.imgHeader }
            />
            <h3 data-testid="header-player-name">{ name }</h3>
          </div>
          <h3 data-testid="header-score">{`Pontos: ${score}`}</h3>
        </div>
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
