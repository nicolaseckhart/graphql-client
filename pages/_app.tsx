import { ClientContext } from 'graphql-hooks'
import { useGraphQLClient } from '../lib/graphql-hooks'
import { AppProps } from 'next/app'
import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const graphQLClient = useGraphQLClient(pageProps.initialGraphQLState)

  return (
    <ClientContext.Provider value={graphQLClient}>
      <Component {...pageProps} />
    </ClientContext.Provider>
  )
}

export default App
