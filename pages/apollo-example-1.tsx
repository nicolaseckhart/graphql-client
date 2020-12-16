import React, { useState } from 'react'
import Head from 'next/head'
import { getClient, query } from '../helpers/helpers'

const ApolloExample1: React.FC = () => {
  const [place, setPlace] = useState();

  getClient().query({ query: query }).then(result => setPlace(result.data));

  return (
    <div className="container">
      <Head>
        <title>GraphQL Client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Apollo Example 1</h1>
        <p>Apollo client using <code>client.query(...)</code> to get results.</p>
        <p>Place: { JSON.stringify(place) }</p>
      </main>
    </div>
  );
};

export default ApolloExample1;
