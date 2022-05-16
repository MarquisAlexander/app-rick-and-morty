import React, {useContext, useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

import * as Styles from './styles';
import {GET_DETAILS_EPISODE} from '../../utils/querys';
import Context from '../../Context';

export function DetailsEpisode({route, navigation}) {
  const [details, setDetails] = useState({});
  const [total, setTotal] = useContext(Context);
  const {loading, error, data} = useQuery(GET_DETAILS_EPISODE, {
    variables: {id: route.params.id},
  });

  useEffect(() => {
    getDataCharacter();
  }, [data]);

  async function getDataCharacter() {
    try {
      if (data) {
        setDetails(data?.episode);
      }
    } catch (error) {}
  }

  function handleProfile({id = 0}) {
    setTotal(id);
    navigation.navigate('Perfil');
  }

  return (
    <>
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <ActivityIndicator size={24} color={'red'} />
        </View>
      ) : (
        <Styles.Container>
          <Styles.Title>Episódio {details?.name}</Styles.Title>
          <Styles.DefaultText>Estreou: {details?.air_date}</Styles.DefaultText>
          <Styles.DefaultText>Personagens desse episódio</Styles.DefaultText>
          <FlatList
            data={details?.characters}
            keyExtractor={item => item}
            numColumns={3}
            renderItem={({item, index}) => (
              <Styles.EpisodeContainer
                onPress={() => handleProfile({id: item.id})}>
                <Styles.ImageProfile source={{uri: item?.image}} />
                <Styles.DefaultText>{item?.name}</Styles.DefaultText>
              </Styles.EpisodeContainer>
            )}
          />
        </Styles.Container>
      )}
    </>
  );
}
