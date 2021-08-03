import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';

import theme from './theme';
import Home from './pages/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
