import React, {useContext, useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {useQuery} from '@apollo/react-hooks';

import Context from '../../Context';

import * as Styles from './styles';
import {GET_DETAILS_CHARACTER} from '../../utils/querys';
import {CardEpisode} from '../../components/CardEpisode';

export function Profile() {
  const [total, setTotal] = useContext(Context);
  const [dataProfile, setDataProfile] = useState({});
  const {loading, error, data} = useQuery(GET_DETAILS_CHARACTER, {
    variables: {id: total},
  });

  useEffect(() => {
    getDataCharacter();
  }, [data]);

  async function getDataCharacter() {
    try {
      if (data) {
        setDataProfile(data?.character);
      }
    } catch (error) {}
  }

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.ImageProfile source={{uri: dataProfile?.image}} />
        <Styles.Name>{dataProfile?.name}</Styles.Name>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            backgroundColor: '#2D2F53',
            borderRadius: 24,
          }}>
          <Styles.defaultText>
            Origem: {dataProfile?.origin?.name}
          </Styles.defaultText>
          <Icons name="chevron-right" size={24} color={'white'} />
        </View>
      </Styles.Header>
      <Styles.defaultText>Episódios nos quais participou</Styles.defaultText>
      <FlatList
        data={dataProfile?.episode}
        keyExtractor={item => item}
        numColumns={2}
        renderItem={({item, index}) => (
          <CardEpisode episode={item.episode} title={item.name} />
        )}
      />
    </Styles.Container>
  );
}
