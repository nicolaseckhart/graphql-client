import React from 'react'
import Head from 'next/head'
import { GraphQL, GraphQLProvider, useGraphQL } from 'graphql-react';
import { PLACE_QUERY_STRING } from '../helpers/queries'

const graphql = new GraphQL();

const GraphqlReactExample: React.FC = () => {
  return (
    <GraphQLProvider graphql={graphql}>
      <ExampleConsumer />
    </GraphQLProvider>
  );
};

const fetchOptionsOverride = (options) => {
  options.url = 'http://localhost:8080/v1/graphql';
}

const ExampleConsumer: React.FC = () => {
  // Memoization allows the `useGraphQL` hook to avoid work in following renders with the same GraphQL operation.
  const operation = React.useMemo(
    () => ({
      query: PLACE_QUERY_STRING,
      variables: {
        id: 'Foobar',
      },
    }),
    []
  );

  const { loading, cacheValue } = useGraphQL({
    operation,
    fetchOptionsOverride,
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  if (loading) return <p>Loading...</p>;
  if (cacheValue?.graphQLErrors) return <p>Error :(</p>;

  return (
    <>
      <Head>
        <title>GraphQL Client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>GraphQL React Example</h1>
        <p>
          <a href="https://github.com/nearform/graphql-hooks">GraphQL React</a>
          &nbsp;client to get results.
        </p>
        <p>Place: { JSON.stringify(cacheValue?.data) }</p>
      </main>
    </>
  );
}

export default GraphqlReactExample;
