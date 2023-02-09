import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Login extends React.Component {
  state = {
    validEmail: false,
    validaName: false,
  };

  verificaEmail = (input) => {
    const emailValue = input.target.value;
    const validaEmail = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(emailValue);
    this.setState({
      validEmail: validaEmail,
    });
  };

  verificaNome = (input) => {
    const nameLength = input.target.value.length;
    const minLength = 3;
    const validName = nameLength >= minLength;
    this.setState({
      validaName: validName,
    });
  };

  render() {
    const { validEmail, validaName } = this.state;
    // const { dispatch, history } = this.props;
    return (
      <div>
        <input
          name="name-player"
          type="text"
          data-testid="input-player-name"
          placeholder="Nome do jogador"
          required
          onChange={ this.verificaNome }
        />
        <input
          name="email-player"
          type="text"
          data-testid="input-gravatar-email"
          placeholder="Seu melhor email"
          required
          onChange={ this.verificaEmail }
        />
        <button
          data-testid="btn-play"
          disabled={ (validEmail && validaName) === false }
          type="button"
          // onClick={ () => { dispatch(login(email)); history.push('/carteira'); } }
        >
          Play
        </button>
      </div>
    );
  }
}
Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect()(Login);
