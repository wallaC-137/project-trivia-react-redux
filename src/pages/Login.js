import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken } from '../api/api';
import { login } from '../redux/actions/action';

class Login extends React.Component {
  state = {
    validEmail: false,
    validaName: false,
    name: '',
    email: '',
  };

  clickButton = async () => {
    const { history } = this.props;
    const tokenFind = await getToken();
    localStorage.setItem('token', tokenFind);
    history.push('/game');
  };

  verificaEmail = (input) => {
    const emailValue = input.target.value;
    const validaEmail = (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(emailValue);
    this.setState({
      validEmail: validaEmail,
      email: emailValue,
    });
  };

  verificaNome = (input) => {
    const nameValue = input.target.value;
    const nameLength = input.target.value.length;
    const minLength = 3;
    const validName = nameLength >= minLength;
    this.setState({
      validaName: validName,
      name: nameValue,
    });
  };

  render() {
    const { validEmail, validaName, name, email } = this.state;
    const { dispatch } = this.props;
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
          onClick={ () => { dispatch(login({ name, email })); this.clickButton(); } }
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
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
export default connect()(Login);
