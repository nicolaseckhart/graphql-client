import React from 'react'
import Head from 'next/head'
import { ApolloProvider, useQuery } from '@apollo/client'
import { PLACE_QUERY } from '../helpers/queries'
import * as ApolloClient from '../helpers/apollo-client'
import { Query } from '../graphql/generated/graphql'
import PlaceComponent from '../components/place-component'

const ApolloExample2: React.FC = () => {
  return (
    <ApolloProvider client={ApolloClient.getClient()}>
      <ExampleConsumer />
    </ApolloProvider>
  )
}

const ExampleConsumer: React.FC = () => {
  const { loading, error, data } = useQuery<Query>(PLACE_QUERY, {
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
          &nbsp;using <code>useQuery(...)</code> with graphql-code-generator to
          get typed results.
        </p>
        <PlaceComponent place={data.place} />
      </main>
    </>
  )
}

export default ApolloExample2
