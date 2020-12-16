import React from 'react'
import Head from 'next/head'
import { ApolloProvider, useQuery } from '@apollo/client'
import { PLACE_QUERY } from '../helpers/queries'
import * as ApolloClient from '../helpers/apollo-client';

const ApolloExample2: React.FC = () => {
  return (
    <ApolloProvider client={ApolloClient.getClient()}>
      <ExampleConsumer />
    </ApolloProvider>
  );
};

const ExampleConsumer: React.FC = () => {
  const { loading, error, data } = useQuery(PLACE_QUERY, { variables: { id: 'Foobar' } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Head>
        <title>GraphQL Client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Apollo Example 2</h1>
        <p>
          <a href="https://www.apollographql.com/docs/react">Apollo Client</a>
          &nbsp;using <code>useQuery(...)</code> to get results.
        </p>
        <p>Place: { JSON.stringify(data) }</p>
      </main>
    </>
  );
}

export default ApolloExample2;
