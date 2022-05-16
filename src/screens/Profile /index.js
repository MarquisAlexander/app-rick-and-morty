import React, {useContext, useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

import {api} from '../../services/api';

import Context from '../../Context';

import * as Styles from './styles';

export function Profile() {
  const [total, setTotal] = useContext(Context);
  const [dataProfile, setDataProfile] = useState({});

  useEffect(() => {
    getDataCharacter();
  }, [total]);

  async function getDataCharacter() {
    try {
      let url = `/character/${total}`;
      const response = await api.get(url);
      setDataProfile(response.data);
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
        numColumns={3}
        renderItem={({item, index}) => (
          <Styles.EpisodeContainer>
            <Styles.defaultText>{index + 1}</Styles.defaultText>
          </Styles.EpisodeContainer>
        )}
      />
    </Styles.Container>
  );
}
