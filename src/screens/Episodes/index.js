import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList, Image} from 'react-native';

import Context from '../../Context';
import {api} from '../../services/api';

import * as Styles from "./styles"

export function Episodes({navigation}) {
  const [listCharacter, setListCharacter] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useContext(Context);

  useEffect(() => {
    getListCharacter({});
  }, []);

  async function getListCharacter({page = 1}) {
    try {
      console.log('dentro do try');
      let url = `/episode?page=${page}`;
      const response = await api.get(url);
      let array = [];
      if (page > 1) {
        array = listCharacter;
        array = array.concat(response.data.results);
        setPage(page)
      } else {
        array = response.data.results;
      }
      setListCharacter(array);
    } catch (error) {
      console.log('error', error);
    }
  }

  function handleProfile({id= 0}) {
    setTotal(id)
    navigation.navigate("profile")
  }

  return (
    <Styles.Container>
      <FlatList
        data={listCharacter}
        keyExtractor={item => item?.id}
        onEndReached={() => getListCharacter({page: page + 1})}
        onEndReachedThreshold={0.1}
        numColumns={2}
        renderItem={({item}) => (
          <Styles.ContainerCharacter onPress={() => handleProfile({id: item.id})}>
            <Styles.Name>Episodio: {item?.id}</Styles.Name>
            <Styles.Name>{item?.name}</Styles.Name>
            <Styles.Name>Exibido: {item?.air_date}</Styles.Name>
          </Styles.ContainerCharacter>
        )}
      />
    </Styles.Container>
  );
}
