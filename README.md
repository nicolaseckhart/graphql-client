# GraphQL Client Evaluations
Tun run locally install dependencies with `yarn install` and run `yarn dev`.

## Clients

### Apollo Client
- GitHub (15.2k): https://github.com/apollographql/apollo-client
- Docs: https://www.apollographql.com/docs/react/api/apollo-client
- Next JS Example: https://github.com/vercel/next.js/tree/canary/examples/api-routes-apollo-server-and-client#readme
- Next JS Example (TS): https://github.com/vercel/next.js/tree/canary/examples/with-typescript-graphql


- Server side rendering: https://www.apollographql.com/docs/react/api/react-ssr
- Caching: https://www.apollographql.com/docs/react/caching/cache-configuration

Advantages of **Apollo** over **Relay**: https://open.nytimes.com/the-new-york-times-now-on-apollo-b9a78a5038c


### GraphQL Hooks
- GitHub (1.4k): https://github.com/nearform/graphql-hooks
- Next JS Example: https://github.com/vercel/next.js/tree/canary/examples/with-graphql-hooks


- Server side rendering: https://github.com/nearform/graphql-hooks/tree/master/packages/graphql-hooks-ssr
- Caching: https://github.com/nearform/graphql-hooks/tree/master/packages/graphql-hooks-memcache
- Pros: small size, concise API, quick setup
- Cons: No middleware support, caching less configurable when compared to Apollo
 

https://blog.logrocket.com/comparing-hooks-libraries-for-graphql compares **Apollo** and **GraphQL Hooks** in a small project.
The author prefers GraphQL Hooks for it's simple API and quick setup. Both provide similar SSR capabilities, both have caching 
packages (though Apollo provides more options to configure the caching and has options for [cache interaction](https://www.apollographql.com/docs/react/caching/cache-interaction/) 
and [persistance](https://www.apollographql.com/docs/react/caching/advanced-topics/#cache-persistence)).

### GraphQL React
- GitHub (~600): https://github.com/jaydenseric/graphql-react
- Next JS Example: https://github.com/vercel/next.js/tree/canary/examples/with-graphql-react


- Supports caching and SSR
- Few stars compared to the others but still actively maintained
- Comparison with Apollo by the Author: https://github.com/jaydenseric/graphql-react#apollo-comparison

### urql
- GitHub (~5.3k): https://github.com/FormidableLabs/urql
- Next JS Example: https://github.com/vercel/next.js/tree/canary/examples/with-urql

No hooks. 