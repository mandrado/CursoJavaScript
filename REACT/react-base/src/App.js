import React from 'react';
import { Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
