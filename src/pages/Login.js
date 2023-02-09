import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken } from '../api/api';

class Login extends React.Component {
  state = {
    validEmail: false,
    validaName: false,
  };

  clickButton = async () => {
    const { history } = this.props;
    const tokenFind = await getToken();
    localStorage.setItem('token', tokenFind);
    history.push('/game');
    // dispatch(login(this.state));
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
    const { history: { push } } = this.props;
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
          onClick={ this.clickButton }
        >
          Play
        </button>
        <button
          data-testid="btn-settings"
          onClick={ () => push('/settings') }
        >
          Configuração
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
