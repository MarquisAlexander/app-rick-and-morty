import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Episodes} from './screens/Episodes';
import {ListCharacters} from './screens/ListCharacters';
import {Profile} from './screens/Profile ';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export function Navigation() {
  return <MyStack />;
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={MyTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="listCharacters" component={ListCharacters} />
      <Tab.Screen name="episodes" component={Episodes} />
    </Tab.Navigator>
  );
}
