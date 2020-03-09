import React from 'react';

import Header from './components/Header'
import Routes from './routes'

import GlobalStyle from './styles/global'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Routes />
    </div>
  );
}

export default App;