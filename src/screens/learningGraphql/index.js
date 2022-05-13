import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {View, Text, FlatList, Image} from 'react-native';

import {} from 'react-native';

const SECTIONS_QUERY = gql`
  query {
    characters {
      results {
        name
        image
      }
    }
  }
`;

export function LearningReactNative() {
  const {loading, error, data} = useQuery(SECTIONS_QUERY);

  if (loading) {
    return (
      <View>
        <Text>AINDA ESTOU CARREGANDO</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>Erro</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>CARREGOU</Text>
    </View>
  );
}
