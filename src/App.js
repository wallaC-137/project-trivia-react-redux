import React from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';
import Settings from './pages/settings';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />

        <Switch>
          <Route component={ Login } path="/" exact />
          <Route component={ Settings } path="/settings" />
        </Switch>

      </header>
    </div>
  );
}
