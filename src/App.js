import React from 'react'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import fetch from './fetch'

import './App.css'
import Component from './Component'

const client = new GraphQLClient({
  //url: 'https://zenql.stagev4.zenginehq.com/programs/6903/graphql',
  url: 'http://localhost:3333/programs/6903/graphql',
  headers: { 'Authorization': 'Bearer e63dd9ec8abb82ff64e3316a87293ebff5de7437' },
  fetch
})

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        React GraphQL Hooks
      </header>
      <ClientContext.Provider value={client}>
        <Component />
      </ClientContext.Provider>
    </div >
  )
}

export default App
