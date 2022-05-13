import 'react-native-gesture-handler';

import React, {useState} from 'react';
import {Navigation} from './src';
import {NavigationContainer} from '@react-navigation/native';

import Context from './src/Context';

export function App() {
  const [total, setTotal] = useState([]);

  return (
    <Context.Provider value={[total, setTotal]}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Context.Provider>
  );
}
