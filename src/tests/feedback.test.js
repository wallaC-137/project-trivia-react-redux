import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { act } from '@testing-library/react';



describe('Testando o componente Feedback', () => {
  it('Verifica se Feedback possui feedback-text, gravatar e score', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/feedback');
    });
    expect(history.location.pathname).toBe('/feedback')

    const feedbackText = screen.getByTestId("feedback-text");
    const gravatar = screen.getByTestId("header-profile-picture");
    const score = screen.getByTestId("header-score");

    expect(feedbackText).toBeInTheDocument();
    expect(gravatar).toBeInTheDocument();
    expect(score).toBeInTheDocument();

  });
});

describe('', () => {
   it('Verifica se há um botão de Ranking e direciona à página correta',  async () => {  
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/feedback');
    });
    expect(history.location.pathname).toBe('/feedback')
    const rankingBtn = screen.getByTestId("btn-ranking");
    expect(rankingBtn).toBeInTheDocument();
    userEvent.click(rankingBtn);
    const rankingTitle = screen.getByText("Ranking");
    expect(rankingTitle).toBeInTheDocument();
  })

})