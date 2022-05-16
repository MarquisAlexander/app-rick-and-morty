import React, {useContext, useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import {useQuery} from '@apollo/react-hooks';

import {api} from '../../services/api';

import Context from '../../Context';

import * as Styles from './styles';
import {GET_DETAILS_EPISODE} from '../../utils/querys';

export function DetailsEpisode({route}) {
  const [total, setTotal] = useContext(Context);
  const [details, setDetails] = useState({});
  const {loading, error, data} = useQuery(GET_DETAILS_EPISODE, {
    variables: {page: 1},
  });

  useEffect(() => {
    getDataCharacter();
  }, [data]);

  async function getDataCharacter() {
    try {
      console.log('data: ', data?.episode);
      setDetails(data?.episode);
    } catch (error) {}
  }

  return (
    <Styles.Container>
      <Styles.Title>Episódio {details?.name}</Styles.Title>
      <Styles.DefaultText>Estreou: {details?.air_date}</Styles.DefaultText>
      <Styles.DefaultText>Personagens desse episódio</Styles.DefaultText>
      <FlatList
        data={details?.characters}
        keyExtractor={item => item}
        numColumns={3}
        renderItem={({item, index}) => (
          <Styles.EpisodeContainer>
            <Styles.ImageProfile source={{uri: item?.image}} />
            <Styles.DefaultText>{item?.name}</Styles.DefaultText>
          </Styles.EpisodeContainer>
        )}
      />
    </Styles.Container>
  );
}
