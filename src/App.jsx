import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Routes from './routes';

import GlobalStyle from './theme/global';

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
