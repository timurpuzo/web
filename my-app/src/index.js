// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import './index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#784706',
    },
    secondary: {
      main: '#784706',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
//chatgpt
