import React, { useState } from 'react'
import Head from 'next/head'
import { PLACE_QUERY } from '../helpers/queries'
import * as ApolloClient from '../helpers/apollo-client';

const ApolloExample1: React.FC = () => {
  const [place, setPlace] = useState();

  ApolloClient.getClient().query(
    {
      query: PLACE_QUERY,
      variables: {
        id: 'Foobar'
      }
    }).then(result => setPlace(result.data));

  return (
    <>
      <Head>
        <title>GraphQL Client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Apollo Example 1</h1>
        <p>
          <a href="https://www.apollographql.com/docs/react">Apollo Client</a>
          &nbsp;using <code>client.query(...)</code> to get results.
        </p>
        <p>Place: { JSON.stringify(place) }</p>
      </main>
    </>
  );
};

export default ApolloExample1;
