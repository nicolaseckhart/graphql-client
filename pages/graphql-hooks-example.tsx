import React from 'react'
import Head from 'next/head'
import * as GraphqlHooksClient from '../helpers/graphql-hooks-client'
import { useQuery } from 'graphql-hooks'
import { ClientContext } from 'graphql-hooks'
import { PLACE_QUERY_STRING } from '../helpers/queries'

const GraphqlHooksExample: React.FC = () => {
  return (
    <ClientContext.Provider value={GraphqlHooksClient.getClient()}>
      <ExampleConsumer />
    </ClientContext.Provider>
  )
}

const ExampleConsumer: React.FC = () => {
  const { loading, error, data } = useQuery(PLACE_QUERY_STRING, {
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
        <h1>GraphQL Hooks Example</h1>
        <p>
          <a href="https://github.com/nearform/graphql-hooks">GraphQL Hooks</a>
          &nbsp;client using <code>useQuery(...)</code> to get results.
        </p>
        <p>Place: {JSON.stringify(data)}</p>
      </main>
    </>
  )
}

export default GraphqlHooksExample
