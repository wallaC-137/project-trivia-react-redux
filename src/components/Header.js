import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends Component {
  render() {
    const { name, email } = this.props;
    const emailString = md5(email).toString();
    return (
      <header>
        <img src={ `https://www.gravatar.com/avatar/${emailString}` } data-testid="header-profile-picture" alt={ name } />
        <h3 data-testid="header-player-name">{ name }</h3>
        <h3 data-testid="header-score"> 0 </h3>
      </header>
    );
  }
}
const mapStateToProps = (state) => ({
  name: state.user.user.nameUser,
  email: state.user.user.email,
});

Header.propTypes = {
  name: PropTypes.string.isRequired,
}.isRequired;
export default connect(mapStateToProps)(Header);
