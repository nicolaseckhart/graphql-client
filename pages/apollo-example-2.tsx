import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import * as ApolloClient from '../helpers/apollo-client'
import PlaceComponent from '../components/place-component'
import { usePlaceQuery } from '../graphql/documents/place.graphql'

const ApolloExample2: React.FC = () => {
  return (
    <ApolloProvider client={ApolloClient.getClient()}>
      <ExampleConsumer />
    </ApolloProvider>
  )
}

const ExampleConsumer: React.FC = () => {
  const { loading, error, data } = usePlaceQuery({
    variables: { id: 'Foobar' },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

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
          &nbsp;using <code>useQuery(...)</code> with graphql-let and
          graphql-code-generator to get already typed results and custom hooks.
        </p>
        <PlaceComponent place={data.place} />
      </main>
    </>
  )
}

export default ApolloExample2
