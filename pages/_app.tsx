import React from 'react';
import { createClient, Provider } from 'urql';
import { AppProps } from 'next/app';
import fetch from 'isomorphic-unfetch';

const client = createClient({
  url: process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/api/graphql',
  fetch
});

const App = ({ Component, pageProps }: AppProps) => {
    return (
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    );
};

export default App;
