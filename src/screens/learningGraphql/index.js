import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

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
  const [products, setProducts] = useState([]);
  const {loading, error, data} = useQuery(SECTIONS_QUERY);

  useEffect(() => {
    if (data) {
      setProducts(data?.characters?.results);
    }
  }, [data]);

  if (error) {
    return (
      <View>
        <Text>Erro</Text>
      </View>
    );
  }
  return (
    <View>
      {loading ? <Text>AINDA ESTOU CARREGANDO</Text> : <Text>CARREGOU</Text>}
      <FlatList
        data={products}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
        numColumns={2}
        keyExtractor={(product, index) => `${product.key}${index}`}
      />
    </View>
  );
}
