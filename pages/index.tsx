import React from 'react'
import Head from 'next/head'

export const Home: React.FC = () => {
  return (
    <div className="container">
      <Head>
        <title>GraphQL Client</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>GraphQL Client</h1>
        <a href="/apollo-example-1">Apollo Example 1</a><br />
        <a href="/apollo-example-2">Apollo Example 2</a><br />
      </main>
    </div>
  );
};

export default Home
