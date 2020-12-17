import { useMemo } from 'react'
import { GraphQLClient } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'

let graphQLClient

const createClient = (initialState) => {
  return new GraphQLClient({
    ssrMode: typeof window === 'undefined',
    url: 'http://localhost:8080/v1/graphql',
    cache: memCache({ initialState }),
  })
}

export const initializeGraphQL = (initialState = null) => {
  const _graphQLClient = graphQLClient ?? createClient(initialState)

  // After navigating to a page with an initial GraphQL state, create a new cache with the
  // current state merged with the incoming state and set it to the GraphQL client.
  // This is necessary because the initial state of `memCache` can only be set once
  if (initialState && graphQLClient) {
    graphQLClient.cache = memCache({
      initialState: Object.assign(
        graphQLClient.cache.getInitialState(),
        initialState
      ),
    })
  }
  // For SSG and SSR always create a new GraphQL Client
  if (typeof window === 'undefined') return _graphQLClient
  // Create the GraphQL Client once in the client
  if (!graphQLClient) graphQLClient = _graphQLClient

  return _graphQLClient
}

export const useGraphQLClient = (initialState) => {
  return useMemo(() => initializeGraphQL(initialState), [initialState])
}
