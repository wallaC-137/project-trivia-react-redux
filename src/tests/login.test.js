import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login'
import App from '../App'


describe('Testando o componente Login', () => {
  it('Verifica se há um input para name', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/'] })
    const inputName = screen.getByTestId("input-player-name");
    const inputEmail = screen.getByTestId("input-gravatar-email");
    const playBtn = screen.getByTestId("btn-play");

    userEvent.type(inputName, 'Alguem');
    expect(playBtn).toBeDisabled()
    userEvent.type(inputEmail, 'alguem@email.com');
    expect(playBtn).toBeEnabled()

  });
});

describe('', () => {
   it('Verifica se há um botão de configurações e direciona à página correta', () => {
     
      renderWithRouterAndRedux(<App />, { initialEntries: ['/'] })
     
     const settingsBtn = screen.getByTestId("btn-settings");
     expect(settingsBtn).toBeInTheDocument();
     userEvent.click(settingsBtn);
     
     const settingsTitle = screen.getByText("Configurações");
     expect(settingsTitle).toBeInTheDocument();
     
   });

describe('', () => {
  it('Verifica se há um botão de play e ao clicar é redicrecionado a rota correta', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/'] })
    const inputName = screen.getByTestId("input-player-name");
    const inputEmail = screen.getByTestId("input-gravatar-email");
    const playBtn = screen.getByTestId("btn-play");

    userEvent.type(inputName, 'Alguem');
    expect(playBtn).toBeDisabled()
    userEvent.type(inputEmail, 'alguem@gmail.com');
    expect(playBtn).toBeEnabled()

    userEvent.click(playBtn);   
  });
})
})