import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider } from '@material-ui/core/styles';
import {customTheme} from './theme';
import AppRouter from './router';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <AppRouter theme={customTheme}></AppRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
