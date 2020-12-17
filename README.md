# GraphQL Client Evaluations

Tun run locally install dependencies with `yarn install` and run `yarn dev`.

## Apollo Client

- GitHub (15.2k): https://github.com/apollographql/apollo-client
- Docs: https://www.apollographql.com/docs/react/api/apollo-client
- Next JS Example: https://github.com/vercel/next.js/tree/canary/examples/api-routes-apollo-server-and-client#readme
- Next JS Example (TS): https://github.com/vercel/next.js/tree/canary/examples/with-typescript-graphql


- Server side rendering: https://www.apollographql.com/docs/react/api/react-ssr
- Caching: https://www.apollographql.com/docs/react/caching/cache-configuration

### Examples
Examples can be found on the `main` branch on the pages `apollo-example-1` and `apollo-example-2`, as well 
as the `apollo-ssr` branch, where the query is performed on the NextJS server.

### Further Reading
Advantages of **Apollo** over **Relay**: https://open.nytimes.com/the-new-york-times-now-on-apollo-b9a78a5038c

## GraphQL Hooks

- GitHub (1.4k): https://github.com/nearform/graphql-hooks
- Next JS Example: https://github.com/vercel/next.js/tree/canary/examples/with-graphql-hooks


- Server side rendering: https://github.com/nearform/graphql-hooks/tree/master/packages/graphql-hooks-ssr
- Caching: https://github.com/nearform/graphql-hooks/tree/master/packages/graphql-hooks-memcache
- Pros: small size, concise API, quick setup
- Cons: No middleware support, caching less configurable when compared to Apollo

### Examples
Examples can be found on the `main` branch on the pages `graphql-hooks-example`, as well as the 
`graphql-hooks-ssr` branch, where the query is performed on the NextJS server.

### Further Reading
https://blog.logrocket.com/comparing-hooks-libraries-for-graphql compares **Apollo** and **GraphQL Hooks** in a small project.
The author prefers GraphQL Hooks for it's simple API and quick setup. Both provide similar SSR capabilities, both have caching
packages (though Apollo provides more options to configure the caching and has options for [cache interaction](https://www.apollographql.com/docs/react/caching/cache-interaction/)
and [persistance](https://www.apollographql.com/docs/react/caching/advanced-topics/#cache-persistence)).

## GraphQL React

- GitHub (~600): https://github.com/jaydenseric/graphql-react
- Next JS Example: https://github.com/vercel/next.js/tree/canary/examples/with-graphql-react

- Supports caching and SSR
- Few stars compared to the others but still actively maintained
- Comparison with Apollo by the Author: https://github.com/jaydenseric/graphql-react#apollo-comparison

### Examples
Examples can be found on the `main` branch on the pages `graphql-react-example`.

## urql

- GitHub (~5.3k): https://github.com/FormidableLabs/urql
- Next JS Example: https://github.com/vercel/next.js/tree/canary/examples/with-urql

No hooks. Works more like an axios with some graphql flavored sugar. Would still be usable by
fetching with `useEffect` in the browser or normally in `getServerSideProps` on the next server.

## Relay

Some comparisons with Apollo:
- https://www.prisma.io/blog/relay-vs-apollo-comparing-graphql-clients-for-react-apps-b40af58c1534
- https://maxrozen.com/2018/12/15/apollo-vs-relay-which-graphql-client-to-use-2019/

Both say the barrier of entry for Relay is much higher and Apollo has a better development experience.

# Code Generation

[GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator) can be used to generate code as seen
in apollo example 2. This means the imported query type can be used like `useQuery<Query>` to have typed
results.

```
// Dev dependendies
"@graphql-codegen/cli": "1.19.4",
"@graphql-codegen/introspection": "1.18.1",
"@graphql-codegen/typescript": "1.19.0",
"@graphql-codegen/typescript-operations": "1.17.12",
"@graphql-codegen/typescript-react-apollo": "2.2.1",
```

Config:

```yaml
# codegen.yml

overwrite: true
schema: 'http://localhost:8080/v1/graphql'
generates:
  graphql/generated/graphql.tsx:
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-apollo'
```

Generate:

```
graphql-codegen --config codegen.yml
```

or

```
yarn run codegen
```
