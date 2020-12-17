import React from 'react'
import Head from 'next/head'
import { PLACE_QUERY } from '../helpers/queries'
import { Place } from '../graphql/documents/place.graphql'
import { GetServerSideProps } from 'next'
import PlaceComponent from '../components/place-component'
import { initializeGraphQL } from '../lib/graphql-hooks'
import graphQLRequest from '../lib/graphql-request'
import { AppProps } from 'next/app'

interface ExampleConsumerProps extends AppProps {
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
        <h1>GraphQL Hooks SSR Example</h1>
        <p>
          <a href="https://github.com/nearform/graphql-hooks">GraphQL Hooks</a>
          &nbsp;using SSR to get results.
        </p>
        <PlaceComponent place={place} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = initializeGraphQL()

  const { data } = await graphQLRequest(client, PLACE_QUERY, {
    variables: { id: 'foobar' },
  })

  return {
    props: {
      place: data.place,
    },
  }
}

export default ExampleConsumer
