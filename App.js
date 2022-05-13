import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {Navigation} from './src';

import Context from './src/Context';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export function App() {
  const [total, setTotal] = useState([]);

  return (
    <ApolloProvider client={client}>
      <Context.Provider value={[total, setTotal]}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Context.Provider>
    </ApolloProvider>
  );
}
