import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';

import {Navigation} from './src';

import Context from './src/Context';
import { client } from './src/services/api';

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
