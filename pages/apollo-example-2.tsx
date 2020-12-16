import React from 'react'
import Head from 'next/head'
import { ApolloProvider, useQuery } from '@apollo/client'
import { getClient, query } from '../helpers/helpers'

const ApolloExample2: React.FC = () => {
  return (
    <ApolloProvider client={getClient()}>
      <ExampleConsumer />
    </ApolloProvider>
  );
};

const ExampleConsumer: React.FC = () => {
  const { loading, error, data } = useQuery(query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="container">
      <Head>
        <title>GraphQL Client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Apollo Example 2</h1>
        <p>Apollo client using <code>useQuery(...)</code> to get results.</p>
        <p>Place: { JSON.stringify(data) }</p>
      </main>
    </div>
  );
}

export default ApolloExample2;
