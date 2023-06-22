import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import light from './themes/light';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>   
      <GlobalStyle/>
      <App />
    </ThemeProvider>

  </React.StrictMode>
);

