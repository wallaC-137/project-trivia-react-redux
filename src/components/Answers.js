import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getQuestions } from '../api/api';
import styles from './answers.module.css';

export class answers extends Component {
  state = {
    idx: 0,
    results: [],
    alternatives: [],
    correctAlternative: '',
    displayCorrectAnswer: false,
    time: 30,
    btnDisabled: false,
  };

  componentDidMount() {
    this.initialFunction();
    this.timerFunc();
  }

  /**
   * busca o token no localStorage e faz a requisição para a API, caso o token seja inválido manda o usuário para a tela de login
   * @returns {object} - retorna um objeto com as perguntas e respostas
   */
  initialFunction = async () => {
    const { history: { push } } = this.props;
    const getTokenLs = localStorage.getItem('token');
    const { results, response_code: responseCode } = await getQuestions(getTokenLs);
    this.setState({ results }, this.saveAnswerAlternatives);

    const idResponse = 3;
    if (responseCode === idResponse) {
      alert('Sua sessão expirou');
      localStorage.removeItem('token');
      return push('/');
    }
  };

  /**
   * função responsável por atualizar o estado time e desabilitar os botões caso o tempo acabe
   */
  timerFunc = () => {
    const { time } = this.state;
    const sec = 1000;
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time - 1 }));
    }, sec);

    setTimeout(() => {
      clearInterval(intervalId);
      this.setState({ time: 30, btnDisabled: true });
    }, time * sec);
  };

  /**
   * função responsável por atualizar o estado idx e chamar a função saveAnswerAlternatives
   */
  test = () => {
    this.setState((prev) => ({ idx: prev.idx >= prev
      .results.length - 1 ? 0 : prev.idx + 1 }), this.saveAnswerAlternatives);
    this.isCorrect();
  };

  /**
   * função responsável por atualizar o estado alternatives e correctAlternative
   */
  saveAnswerAlternatives = () => {
    this.setState({
      alternatives: this.shuffle(this.options()),
      correctAlternative: this.options()[0],
    });
  };

  /**
   * pega as respostas corretas e incorretas e retorna um único array com as respostas
   * @returns {array} - retorna um array com as respostas -
   */
  options = () => {
    const { results, idx } = this.state;
    const { correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswer, type } = results[idx];
    const answersTypes = type !== 'boolean' ? [correctAnswer, ...incorrectAnswer]
      : [correctAnswer, incorrectAnswer[0]];
    return answersTypes;
  };

  /**
   * @param {*} array - recebe um array
   * @returns - retorna um array com as respostas embaralhadas
   */
  shuffle = (array) => {
    const num = 0.5;
    const shuffle = array.sort(() => Math.random() - num);
    return shuffle;
  };

  /**
   * controla se a cor da resposta está correta ou incorreta deve ser renderizada
   * função responsável por atualizar o estado displayCorrectAnswer
   */
  isCorrect = () => {
    this.setState({ displayCorrectAnswer: true });
  };

  render() {
    const {
      results,
      idx,
      correctAlternative,
      alternatives,
      displayCorrectAnswer,
      time,
      btnDisabled,
    } = this.state;
    return (
      <div>
        <h2 data-testid="question-category">{results[idx]?.category}</h2>
        <h3 data-testid="question-text">{results[idx]?.question}</h3>
        <div data-testid="answer-options">
          { alternatives.map((answer, index) => ( // renderiza as respostas respostas corretas e incorretas
            <button
              type="button"
              key={ index }
              disabled={ btnDisabled }
              className={ displayCorrectAnswer && (answer !== correctAlternative ? styles // renderiza a cor da resposta correta e incorreta
                .wrongAnswer : styles.correctAnswer) }
              data-testid={ answer !== correctAlternative ? `wrong-answer-${index}`
                : 'correct-answer' }
              onClick={ this.test }
            >
              {answer}
            </button>
          ))}
        </div>
        <h2>{ time }</h2>
      </div>
    );
  }
}

answers.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default answers;
