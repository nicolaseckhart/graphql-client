import React from 'react'
import Head from 'next/head'
import { Place, PlaceDocument } from '../graphql/documents/place.graphql'
import { initializeApollo } from '../lib/apollo'
import { GetServerSideProps } from 'next'
import PlaceComponent from '../components/place-component'

interface ExampleConsumerProps {
  place: Place
}

const ExampleConsumer: React.FC<ExampleConsumerProps> = ({
  place,
}: ExampleConsumerProps) => {
  return (
    <>
      <Head>
        <title>GraphQL Client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Apollo SSR Example</h1>
        <p>
          <a href="https://www.apollographql.com/docs/react">Apollo Client</a>
          &nbsp;using <code>useQuery(...)</code> with graphql-let and
          graphql-code-generator to get already typed results and custom hooks.
        </p>
        <PlaceComponent place={place} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: PlaceDocument,
    variables: { id: 'Foobar' },
  })

  return {
    props: {
      place: data.place,
    },
  }
}

export default ExampleConsumer
