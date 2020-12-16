import { ApolloClient, InMemoryCache } from '@apollo/client'

export const getClient = () =>
  new ApolloClient({
    uri: 'http://localhost:8080/v1/graphql',
    cache: new InMemoryCache(),
  })
