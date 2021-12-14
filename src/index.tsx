import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from 'styled-components';
import App from './App';
import { darkTheme } from "./theme";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={darkTheme}>
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
