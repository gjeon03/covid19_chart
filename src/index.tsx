import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App';
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();
const helmetContext = {};

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
