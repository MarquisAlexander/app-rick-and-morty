import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Episodes} from './screens/Episodes';
import {ListCharacters} from './screens/ListCharacters';
import {Profile} from './screens/Profile ';
import { colors } from './assets/colors';
import { DetailsEpisode } from './screens/DetailsEpisode';

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
      <Stack.Screen name="Perfil" component={Profile} />
      <Stack.Screen name="Detalhes" component={DetailsEpisode} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  const tabBarOptions = {
		activeTintColor: "white",
		inactiveTintColor: "gray",
		indicatorStyle: { backgroundColor: "white", height: "10%", borderTopLeftRadius: 10, borderTopRightRadius: 10 },
		style: {
			backgroundColor: colors.background,
		},
	};

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen name="Personagens" component={ListCharacters} />
      <Tab.Screen name="Episódios" component={Episodes} />
    </Tab.Navigator>
  );
}
