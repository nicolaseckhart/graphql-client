import { GraphQLClient } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'

export const getClient = () =>
  new GraphQLClient({
    url: 'http://localhost:8080/v1/graphql',
    cache: memCache(),
  })
